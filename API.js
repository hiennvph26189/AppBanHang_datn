export const URL = 'http://192.168.1.252:8080/';
// export const URL = 'http://192.168.1.7:8080/';

// login 
export const LOGIN = URL+"api/login-member"
// đăng ký
export const ADDMENBER = URL+"api/add-member"
//get profile member
export const PROFILEMEMBER = URL+"api/profile-member"
// get sản phẩm hot sale
export const LIST_HOST_SALES_PRODUCTS = URL + "api-app/list-hot-sale-product"
// List host order products app
export const LIST_HOST_ODERS_PRODUCTS = URL + "api-app/list-hot-order-product"
// list sản phẩm theo danh mục sản phẩm
export const LIST_PRODUCTS_IN_CATEGORIES = URL + "api-app/list-category-in-products"
//edit profile member
export const EDIT_PROFILE_MEMBER = URL+"api/edit-profile-member"
// sản phẩm mới nhất
export const GET_NEW_PRODUCTS = URL+"api-app/list-new-product"
//nap tien
export const NAPTIENMEMBER = URL+"api/naptien-members"
//get lịch sử nạp tiền
export const LICHSUNAPTIENMEMBER = URL+"api/lich-su-naptien-members"
//get danh mục sản phẩm
export const GET_CATEGORIES = URL+"api/get-all-categories"
// get tất cả sản phẩm trong trang chủ
export const GET_ALLPRODUCTS = URL+"api/get-all-total-product"
//get one product
export const GET_ONE_PRODUCT = URL+"api/get-one-product"
// lấy ra sản phẩm trong giỏ hàng
export const GET_CART_USER = URL+"api/user-carts-product"
//Đổi mật khẩu
export const CHANGE_PASSWD = URL+"api-app/changepass-member"
//Phản hồi
export const FEED_BACK = URL+"api-app/lienhe-member";
//
export const POST_CART_USER = URL+"api/oders-product"
//
export const DELETE_CART_USER = URL+"api/delete-cart-product"
//
export const UPDATE_CART_USER = URL+"api/update-cart-product"
//
export const ORDER_CART_USER = URL+"api/orders-cart-product"
//
export const GET_ALL_USER_ORDERS = URL+"api/lich-su-cart-product"
//
export const HUY_USER_ORDERS = URL+"api/huy-don-cart-product"
//
export const CHI_TIET_ORDERS = URL+"api/chi-tiet-don-cart-product"
//
export const DELETE_ORDERS = URL+"api/delete-orders"
//Lấy danh sách bản tin
export const GET_ALL_NEWS = URL+"api/get-all-news"
//
export const GET_ONE_MEMBER = URL+"get/one-member"
//
export const GET_DANH_SACH_SAN_PHAM_MEMBER = URL+"api/get-all-catygory-product"
//
export const DELETE_TIEN_DA_NAP = URL+"api/delete-nap-tien-Member"