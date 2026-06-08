const STORAGE_KEY = "busca_saudavel_mock_data_v2";

const tags = [
  { _id: "tag-lactose", free_of: "Lactose" },
  { _id: "tag-amendoim", free_of: "Amendoim" },
  { _id: "tag-gluten", free_of: "Glúten" },
  { _id: "tag-acucar", free_of: "Açúcar" },
  { _id: "tag-mariscos", free_of: "Mariscos" },
  { _id: "tag-ovo", free_of: "Ovo" },
  { _id: "tag-origem-animal", free_of: "Origem Animal" },
];


function productImage(label, accent = "#7FA492", background = "#EEF5EF") {
  const safeLabel = String(label).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="480" height="360" viewBox="0 0 480 360">
      <rect width="480" height="360" rx="34" fill="${background}"/>
      <circle cx="374" cy="72" r="58" fill="#ffffff" opacity="0.72"/>
      <circle cx="86" cy="285" r="70" fill="#ffffff" opacity="0.62"/>
      <rect x="132" y="82" width="216" height="196" rx="30" fill="#ffffff" stroke="#E2DED6" stroke-width="4"/>
      <rect x="158" y="114" width="164" height="44" rx="22" fill="${accent}" opacity="0.18"/>
      <rect x="158" y="179" width="164" height="18" rx="9" fill="#D9D5CC"/>
      <rect x="158" y="211" width="108" height="18" rx="9" fill="#D9D5CC" opacity="0.75"/>
      <circle cx="240" cy="136" r="20" fill="${accent}"/>
      <text x="240" y="312" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#3D3A35">${safeLabel}</text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const nutrition = {
  serving_size: "30 g",
  energy_value: "118 kcal",
  carbohydrate: "20 g",
  protein: "4 g",
  total_fat: "2 g",
  fat_saturated: "0,5 g",
  fat_trans: "0 g",
  fiber: "3 g",
  sodium: "65 mg",
  minerals: "Ferro e cálcio",
  vitamins: "B1, B2 e B6",
};

const initialData = {
  users: [
    {
      _id: "user-demo",
      name: "Thamires Stoppelli",
      birth_date: "1998-01-15",
      email: "demo@buscasaudavel.com",
      password: "12345678",
      image: "",
      user_type: 2,
      location: "Fortaleza",
      favorite_products: ["produto-1", "produto-3"],
    },
    {
      _id: "supplier-demo",
      name: "Nature Foods",
      crm_cnpj: "12.345.678/0001-90",
      email: "fornecedor@buscasaudavel.com",
      password: "12345678",
      image: "",
      user_type: 1,
      location: "Fortaleza",
      favorite_products: [],
    },
  ],
  products: [
    {
      _id: "produto-1",
      name: "Granola Integral Sem Glúten",
      image_url: productImage("Granola", "#7FA492"),
      brand: "Nature Foods",
      description: "Granola crocante com aveia sem glúten, castanhas e sementes.",
      ingredients: "Aveia sem glúten, castanha-de-caju, semente de girassol, coco e melado.",
      image: "",
      createdAt: "2024-11-05T10:30:00.000Z",
      tags: [tags[2], tags[4], tags[5], tags[6]],
      may_contain: "Castanhas",
      nutrition_facts: { ...nutrition, serving_size: "40 g", energy_value: "165 kcal", carbohydrate: "24 g", protein: "5 g" },
    },
    {
      _id: "produto-2",
      name: "Bebida Vegetal de Amêndoas",
      image_url: productImage("Bebida vegetal", "#9ABFA8"),
      brand: "Vida Plant",
      description: "Bebida vegetal leve para receitas, café ou consumo diário.",
      ingredients: "Água, amêndoas, cálcio, sal marinho e estabilizante natural.",
      image: "",
      createdAt: "2024-12-12T09:00:00.000Z",
      tags: [tags[0], tags[2], tags[4], tags[5], tags[6]],
      may_contain: "Amêndoas",
      nutrition_facts: { ...nutrition, serving_size: "200 ml", energy_value: "72 kcal", carbohydrate: "3 g", protein: "2 g", total_fat: "5 g" },
    },
    {
      _id: "produto-3",
      name: "Cookie Proteico Sem Açúcar",
      image_url: productImage("Cookie", "#C0DCCC"),
      brand: "Fit Bites",
      description: "Cookie com alto teor de proteína e sem adição de açúcar.",
      ingredients: "Farinha de amêndoas, proteína vegetal, cacau, óleo de coco e adoçante natural.",
      image: "",
      createdAt: "2025-01-20T14:15:00.000Z",
      tags: [tags[0], tags[3], tags[4]],
      may_contain: "Amendoim e castanhas",
      nutrition_facts: { ...nutrition, serving_size: "50 g", energy_value: "210 kcal", carbohydrate: "14 g", protein: "16 g", total_fat: "9 g" },
    },
    {
      _id: "produto-4",
      name: "Macarrão de Arroz Integral",
      image_url: productImage("Macarrão", "#8CA89A"),
      brand: "Nature Foods",
      description: "Massa simples, sem glúten, feita com arroz integral.",
      ingredients: "Farinha de arroz integral e água.",
      image: "",
      createdAt: "2025-02-08T11:45:00.000Z",
      tags: [tags[0], tags[1], tags[2], tags[3], tags[4], tags[5], tags[6]],
      may_contain: "",
      nutrition_facts: { ...nutrition, serving_size: "80 g", energy_value: "286 kcal", carbohydrate: "62 g", protein: "6 g", total_fat: "1,5 g" },
    },
    {
      _id: "produto-5",
      name: "Iogurte Natural Zero Lactose",
      image_url: productImage("Iogurte", "#A8C8B6"),
      brand: "Leve Campo",
      description: "Iogurte natural com textura cremosa e sem lactose.",
      ingredients: "Leite pasteurizado sem lactose e fermentos lácteos.",
      image: "",
      createdAt: "2025-03-02T08:10:00.000Z",
      tags: [tags[0], tags[1], tags[2], tags[3], tags[4]],
      may_contain: "Leite",
      nutrition_facts: { ...nutrition, serving_size: "170 g", energy_value: "92 kcal", carbohydrate: "8 g", protein: "7 g", total_fat: "3 g" },
    },
    {
      _id: "produto-6",
      name: "Mix de Castanhas Sem Sal",
      image_url: productImage("Castanhas", "#789987"),
      brand: "Fit Bites",
      description: "Mix de oleaginosas sem sal e sem açúcar adicionado.",
      ingredients: "Castanha-de-caju, castanha-do-pará, amêndoas e nozes.",
      image: "",
      createdAt: "2025-03-18T16:20:00.000Z",
      tags: [tags[0], tags[2], tags[3], tags[4], tags[5], tags[6]],
      may_contain: "Castanhas",
      nutrition_facts: { ...nutrition, serving_size: "30 g", energy_value: "180 kcal", carbohydrate: "6 g", protein: "5 g", total_fat: "15 g" },
    },
  ],
};

function canUseStorage() {
  return typeof window !== "undefined" && window.localStorage;
}

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

function loadData() {
  if (!canUseStorage()) return clone(initialData);
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
    return clone(initialData);
  }
  return JSON.parse(stored);
}

function saveData(data) {
  if (canUseStorage()) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function response(data, status = 200) {
  return Promise.resolve({ data: clone(data), status });
}

function getFormValue(payload, key) {
  if (!payload) return "";
  if (typeof FormData !== "undefined" && payload instanceof FormData) return payload.get(key) || "";
  return payload[key] || "";
}

function parseNutrition(payload) {
  const value = getFormValue(payload, "nutrition_facts");
  if (!value) return clone(nutrition);
  if (typeof value === "string") {
    try { return JSON.parse(value); } catch { return clone(nutrition); }
  }
  return value;
}

function parseTags(payload) {
  const value = getFormValue(payload, "tags");
  if (!value) return [];
  if (typeof value === "string") {
    try {
      return JSON.parse(value).map((tag) => ({ _id: tag._id || tag.id || tag, free_of: tag.free_of || tag.dados || tag.name || tag }));
    } catch {
      return [];
    }
  }
  return value;
}

function getActiveTagNames(searchParams) {
  const paramMap = ["Lactose", "Amendoim", "Glúten", "Açúcar", "Mariscos", "Ovo", "Origem Animal"];
  return paramMap.filter((_, index) => searchParams.get(`ref_${index + 1}`) === "true");
}

const api = {
  defaults: { headers: { Authorization: null } },

  get(endpoint) {
    const data = loadData();
    const url = new URL(endpoint, "http://mock.local");
    const path = url.pathname;

    if (path === "/product/search") {
      const search = (url.searchParams.get("search") || "").toLowerCase();
      const products = data.products.filter((product) =>
        [product.name, product.brand, product.description, product.ingredients]
          .join(" ")
          .toLowerCase()
          .includes(search)
      );
      return response(products);
    }

    if (path === "/product/search_by_tag") {
      const activeTags = getActiveTagNames(url.searchParams);
      if (!activeTags.length) return response(data.products);
      const products = data.products.filter((product) => {
        const productTags = product.tags.map((tag) => tag.free_of);
        return activeTags.every((tag) => productTags.includes(tag));
      });
      return response(products);
    }

    if (path === "/product/search_in_brand") {
      const brand = (url.searchParams.get("brand") || "").toLowerCase();
      const search = (url.searchParams.get("search") || "").toLowerCase();
      const products = data.products.filter((product) =>
        product.brand.toLowerCase() === brand && product.name.toLowerCase().includes(search)
      );
      return response(products);
    }

    if (path.startsWith("/product/get/")) {
      const id = path.split("/").pop();
      return response(data.products.find((product) => product._id === id));
    }

    if (path.startsWith("/user/get_favorite_products/")) {
      const id = path.split("/").pop();
      const user = data.users.find((item) => item._id === id);
      const products = data.products.filter((product) => user?.favorite_products?.includes(product._id));
      return response(products);
    }

    if (path.startsWith("/user/get/")) {
      const id = path.split("/").pop();
      return response(data.users.find((user) => user._id === id));
    }

    return response(null, 404);
  },

  post(endpoint, payload, config = {}) {
    const data = loadData();

    if (endpoint === "/auth/login" || endpoint === "/login") {
      const user = data.users.find((item) => item.email === payload.email && item.password === payload.password) || data.users[0];
      return response({ user, token: "mock-token" });
    }

    if (endpoint === "/user/register") {
      const user = {
        _id: `user-${Date.now()}`,
        favorite_products: [],
        location: "Fortaleza",
        image: "",
        ...payload,
        user_type: Number(payload.user_type || 2),
      };
      data.users.push(user);
      saveData(data);
      return response(user, 201);
    }

    if (endpoint === "/auth/forgot_password") return response({ ok: true });

    if (endpoint === "/product/create/") {
      const fallbackData = config.data || {};
      const product = {
        _id: `produto-${Date.now()}`,
        name: getFormValue(payload, "name") || fallbackData.name,
        brand: getFormValue(payload, "brand") || fallbackData.brand || "Fornecedor Demo",
        description: getFormValue(payload, "description") || fallbackData.description || "",
        ingredients: getFormValue(payload, "ingredients") || fallbackData.ingredients || "",
        image: "",
        createdAt: new Date().toISOString(),
        tags: parseTags(payload),
        may_contain: getFormValue(payload, "may_contain") || fallbackData.may_contain || "",
        nutrition_facts: parseNutrition(payload),
      };
      data.products.unshift(product);
      saveData(data);
      return response(product, 201);
    }

    return response(null, 404);
  },

  put(endpoint, payload) {
    const data = loadData();

    if (endpoint === "/auth/reset_password") return response({ ok: true });

    if (endpoint.startsWith("/user/add_favorite_product/")) {
      const id = endpoint.split("/").pop();
      const user = data.users.find((item) => item._id === id);
      if (user && !user.favorite_products.includes(payload.product_id)) user.favorite_products.push(payload.product_id);
      saveData(data);
      return response(user);
    }

    if (endpoint.startsWith("/user/remove_favorite_product/")) {
      const id = endpoint.split("/").pop();
      const user = data.users.find((item) => item._id === id);
      if (user) user.favorite_products = user.favorite_products.filter((productId) => productId !== payload.product_id);
      saveData(data);
      return response(user);
    }

    if (endpoint.startsWith("/user/update/")) {
      const id = endpoint.split("/").pop();
      const index = data.users.findIndex((user) => user._id === id);
      if (index >= 0) {
        data.users[index] = {
          ...data.users[index],
          name: getFormValue(payload, "name") || data.users[index].name,
          birth_date: getFormValue(payload, "birth_date") || data.users[index].birth_date,
          location: getFormValue(payload, "location") || data.users[index].location,
          crm_cnpj: getFormValue(payload, "crm_cnpj") || data.users[index].crm_cnpj,
          email: getFormValue(payload, "email") || data.users[index].email,
        };
        saveData(data);
        return response(data.users[index]);
      }
    }

    if (endpoint.startsWith("/product/update/")) {
      const id = endpoint.split("/").pop();
      const index = data.products.findIndex((product) => product._id === id);
      if (index >= 0) {
        data.products[index] = {
          ...data.products[index],
          name: getFormValue(payload, "name") || data.products[index].name,
          brand: getFormValue(payload, "brand") || data.products[index].brand,
          description: getFormValue(payload, "description") || data.products[index].description,
          ingredients: getFormValue(payload, "ingredients") || data.products[index].ingredients,
          nutrition_facts: parseNutrition(payload),
        };
        saveData(data);
        return response(data.products[index]);
      }
    }

    return response(null, 404);
  },

  delete(endpoint) {
    const data = loadData();

    if (endpoint.startsWith("/product/delete/")) {
      const id = endpoint.split("/").pop();
      data.products = data.products.filter((product) => product._id !== id);
      data.users = data.users.map((user) => ({
        ...user,
        favorite_products: user.favorite_products.filter((productId) => productId !== id),
      }));
      saveData(data);
      return response({ ok: true });
    }

    return response(null, 404);
  },
};

export const createAuth = async (email, password) => api.post("/login", { email, password });

export default api;
