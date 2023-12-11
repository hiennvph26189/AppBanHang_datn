export const IP = '192.168.1.252'
export const URL = 'http://'+IP+':8080/';

// export const URL = 'http://192.168.1.7:8080/';

// login 
export const LOGIN = URL+"api/login-member"
// đăng ký
export const ADD_MENBER = URL+"api/add-member"
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
export const LICH_SU_NAP_TIEN_MEMBER = URL+"api/lich-su-naptien-members"
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
//Thêm vào giỏ hàng
export const POST_CART_USER = URL+"api-app/add-cart-products-size"
//delete order
export const DELETE_CART_USER = URL+"api/delete-cart-product"
//update order
export const UPDATE_CART_USER = URL+"api/update-cart-product"
//
export const ORDER_CART_USER = URL+"api/orders-cart-product"
//Đơn hàng đang chờ xấc nhận
export const GET_ALL_USER_ORDERS = URL+"api/lich-su-cart-product"
//Hủy đơn hàng
export const HUY_USER_ORDERS = URL+"api/huy-don-cart-product"
//chi tiết hóa đơn
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

export const THANH_TOAN_9PAY = 'https://shopacc12312.000webhostapp.com/thongtinkhachhang.php'

export const ORDER_CARD_9PAY = URL+ 'api-app/post-order-product-9pay-card'
// List size theo product
export const LIST_SIZE_IN_PRODUCT = URL+ 'api-app/list-products-size'
// List sản phẩm theo  cart và size
export const LIST_SIZE_IN_CART_PRODUCT = URL+ 'api-app/list-cart-products-size'
// check số lượng sản phẩm theo size và cart
export const CHECK_SOLUONG_SP_THEOSIZE_TRONG_ODER = URL+ 'api-app/Check-soluong-sanpham-theo-size'
//
export const RESET_CART_ORDER = URL+ 'api-app/post-reset-cart'
// list size products
export const LIST_SIZE_PRODUCTS = URL+ 'api-app/list-products-size'
// get one product in cart vote star
export const GET_ONE_PRODUCT_IN_CART_VOTE_START = URL+ 'api-app/get-product-cart-vote-star'
// post vote star
export const POST_VOTE_START = URL+ 'api-app/post-vote-star-product'
// check star product
export const CHECK_STAR_PRODUCT = URL+ 'api-app/check-vote-star'
export const GET_TOTAL_STAR_TB_STAR_PRODUCT = URL+ 'api-app/get-total-star-product'
// get danh sách tỉnh thành
export const GET_TINH_THANH = URL +'api-app/tinhThanh';
//get quận huyện
export const GET_QUAN = URL+'api-app/quan';
//get xã phường hị trấn
export const GET_XA = URL+'api-app/xa'
//thêm địa chỉ nhận hàng
export const POST_ADDRESS_MEMBERS= URL+'api-app/address-member'
//get Địa chỉ
export const GET_ADDRESS_MEMBERS = URL+'api-app/get-address-member'
//sửa địa chỉ
export const UPDATE_ADDRESS_MEMBERS = URL+'api-app/put-address-member'
//xóa địa chỉ
export const DELETE_ADDRESS_MEMBERS = URL+'api-app/delete-address-member'
//suawr
export const UPDATE_STATUS_ADDRESS_MEMBERS=URL+'api-app/edit-status-address-member'
//
export const GET_PRODUCT_CART_MEMBER=URL+'api-app/get-cart-product-in-idmember'
// get item address menber 
export const ITEM_ADDRESS_MEMBER=URL+'api-app/get-item-address-in-idmember'
// item address order detail
export const ITEM_ADDRESS_ORDER_DETAIL=URL+'api-app/get-item-address-order-detail'
//get all sản phẩm yêu thích theo member
export const GET_ALL_LIKE_PRODUCTS_MEMBER = URL+'api-app/get-like-products'
//sản phẩm yêu thích
export const LIKE_PRODUCTS = URL+'api-app/like-products'
//Xóa sản phẩm yêu tích
export const DELETE_LIKE_PRODUCTS = URL+'api-app/delete-like-products'
//get one like product in member
export const GET_ONE_LIKE_PRODUCT = URL+'api-app/get-one-like-product'