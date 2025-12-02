import { useState, useEffect } from "react";
import { Search, ChevronRight, Loader, ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface Ingredient {
  ingredient_id: number;
  ingredient_name: string;
  unit_type: string;
  quantity_used: number;
  current_stock: number;
  updated_stock: number;
  is_low_stock: boolean;
}

interface Product {
  product_id: number;
  product_name: string;
  product_type: string;
}

const API_BASE_URL = "http://localhost:8001";

type ViewState = "categories" | "products" | "ingredients";

export function ProductManagementPage() {
  const [viewState, setViewState] = useState<ViewState>("categories");
  const [searchQuery, setSearchQuery] = useState("");

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/product-categories`);
      if (!response.ok) throw new Error("Failed to fetch categories");
      const data = await response.json();
      setCategories(data.categories || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching categories");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = async (category: string) => {
    setSelectedCategory(category);
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/products-by-category/${encodeURIComponent(category)}`);
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data.products || []);
      setViewState("products");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = async (product: Product) => {
    setSelectedProduct(product);
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/product-ingredients/${product.product_id}`);
      if (!response.ok) throw new Error("Failed to fetch ingredients");
      const data = await response.json();
      setIngredients(data.ingredients || []);
      setViewState("ingredients");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching ingredients");
    } finally {
      setLoading(false);
    }
  };

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProducts = products.filter((prod) =>
    prod.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredIngredients = ingredients.filter((ing) =>
    ing.ingredient_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#8b5e3c]">Product Management</h1>
          <p className="text-[#8b5e3c]/60 mt-1">
            {viewState === "categories" && "Select a product category"}
            {viewState === "products" && `Products in ${selectedCategory}`}
            {viewState === "ingredients" && `Ingredients for ${selectedProduct?.product_name}`}
          </p>
        </div>
        {viewState !== "categories" && (
          <Button
            onClick={() => {
              if (viewState === "products") {
                setViewState("categories");
                setSelectedCategory(null);
                setProducts([]);
              } else {
                setViewState("products");
                setSelectedProduct(null);
                setIngredients([]);
              }
              setSearchQuery("");
            }}
            variant="outline"
            className="border-[#d8c3a5] text-[#8b5e3c] flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        )}
      </div>

      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8b5e3c]/40" />
          <Input
            placeholder={
              viewState === "categories"
                ? "Search categories..."
                : viewState === "products"
                ? "Search products..."
                : "Search ingredients..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-[#d8c3a5] text-[#8b5e3c] placeholder-[#8b5e3c]/40"
          />
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader className="w-8 h-8 text-[#8b5e3c] animate-spin" />
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700">
          {error}
        </div>
      )}

      {/* Categories View */}
      {viewState === "categories" && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="bg-white rounded-xl p-6 border border-[#d8c3a5]/30 hover:shadow-lg hover:border-[#8b5e3c]/50 transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#8b5e3c] text-lg group-hover:text-[#6d4a2f]">
                    {category}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-[#8b5e3c]/40 group-hover:text-[#8b5e3c] transition-colors" />
                </div>
              </button>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-[#8b5e3c]/60">No categories found</p>
            </div>
          )}
        </div>
      )}

      {/* Products View */}
      {viewState === "products" && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <button
                key={product.product_id}
                onClick={() => handleProductClick(product)}
                className="bg-white rounded-xl p-6 border border-[#d8c3a5]/30 hover:shadow-lg hover:border-[#8b5e3c]/50 transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#8b5e3c] text-lg group-hover:text-[#6d4a2f]">
                      {product.product_name}
                    </h3>
                    <p className="text-sm text-[#8b5e3c]/60 mt-2">{product.product_type}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#8b5e3c]/40 group-hover:text-[#8b5e3c] transition-colors" />
                </div>
              </button>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-[#8b5e3c]/60">No products found</p>
            </div>
          )}
        </div>
      )}

      {/* Ingredients View */}
      {viewState === "ingredients" && !loading && (
        <div className="bg-white rounded-xl border border-[#d8c3a5]/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#fffaf3] border-b border-[#d8c3a5]/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#8b5e3c]">
                    Ingredient
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#8b5e3c]">
                    Used
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#8b5e3c]">
                    Current Stock
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#8b5e3c]">
                    Updated Stock
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#8b5e3c]">
                    Unit
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredIngredients.length > 0 ? (
                  filteredIngredients.map((ingredient) => (
                    <tr
                      key={ingredient.ingredient_id}
                      className="border-b border-[#d8c3a5]/20 hover:bg-[#fffaf3] transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-[#8b5e3c]">
                        {ingredient.ingredient_name}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#8b5e3c]">
                        {ingredient.quantity_used}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                          {ingredient.current_stock}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              ingredient.updated_stock > 50
                                ? "bg-green-100 text-green-700"
                                : ingredient.updated_stock > 20
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {ingredient.updated_stock}
                          </span>
                          {ingredient.is_low_stock && (
                            <span className="px-2 py-1 rounded-full text-xs font-bold bg-red-500 text-white">
                              ⚠️ LOW
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#8b5e3c]">{ingredient.unit_type}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-[#8b5e3c]/60">
                      No ingredients found for this product
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

