import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { databases, storage } from '../services/appwrite';
import { Query } from 'appwrite'; // Correct import for Query
import conf from '../conf/conf';
// Fetch products from Appwrite
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (category, { rejectWithValue }) => {
    try {
        // Build query based on category
        const query = category
            ? [Query.equal('category', category)] // Filter by category if provided
            : []; // Fetch all products if no category

        // Fetch documents from Appwrite database
        const response = await databases.listDocuments(
            conf.appwriteDatabaseId, // Database ID
            conf.appwriteCollectionId, // Collection ID
            query
        );

        // Fetch image URLs for products
        const productsWithImages = await Promise.all(
            response.documents.map(async (product) => {
                let imageUrl = product.featuredImage;
                if (product.featuredImage) {
                    imageUrl = await fetchImage(product.featuredImage);
                }
                return { ...product, imageUrl };
            })
        );

        return productsWithImages;
    } catch (error) {
        console.error('Error fetching products:', error.message || error);
        return rejectWithValue(error.message || 'Failed to fetch products');
    }
});

// Fetch image URL from Appwrite storage
const fetchImage = async (fileId) => {
    try {
        const baseUrl = conf.appwriteUrl;
        const bucketId = conf.appwriteBucketId; // Bucket ID
        const projectId = conf.appwriteProjectId; // Project ID

        if (!fileId || !bucketId || !projectId) {
            throw new Error('Missing required parameters for fetching the image.');
        }

        // Construct file preview URL
        const filePreviewUrl = `${baseUrl}/storage/buckets/${bucketId}/files/${fileId}/preview?project=${projectId}`;
        return filePreviewUrl;
    } catch (error) {
        console.error('Error fetching image:', error.message || error);
        return null; // Return null if image fetch fails
    }
};

// Redux slice for products
const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error state
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch products';
            });
    },
});

export const { addProduct, setError } = productSlice.actions; // Export actions
export default productSlice.reducer;
