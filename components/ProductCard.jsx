"use client";
import { useRouter } from "next/navigation";
const ProductCard = ({ product, file_url, type }) => {
  const router = useRouter();
  const handleProductDetail = (slug) => {
    router.push(`products/${slug}`);
  };
  if (type === "normal") {
    return (
      <>
        <div className="product-slide_item">
          <div className="inner-slide">
            <div className="single-product">
              <div className="product-img">
                <a
                  onClick={() => handleProductDetail(product.slug)}
                  className="cursor-pointer"
                >
                  <img
                    className="primary-img"
                    src={`${file_url}/${product.photo}`}
                    alt={product.title}
                  />
                  <img
                    className="secondary-img"
                    src={`${file_url}/${product.photo}`}
                    alt={product.title}
                  />
                </a>
                <div className="add-actions">
                  <ul>
                    <li
                      className="quick-view-btn"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="ion-android-open" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <div className="product-desc_info">
                  <h6>
                    <a
                      className="product-name cursor-pointer"
                      onClick={() => handleProductDetail(product.slug)}
                    >
                      {product.title}
                    </a>
                  </h6>
                  <div className="price-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-slide_item">
          <div className="single-product">
            <div className="product-img">
              <a
                onClick={() => handleProductDetail(product.slug)}
                className="cursor-pointer"
              >
                <img
                  className="primary-img"
                  src={`${file_url}/${product.photo}`}
                  alt={product.title}
                />
                <img
                  className="secondary-img"
                  src={`${file_url}/${product.photo}`}
                  alt={product.title}
                />
              </a>
            </div>
            <div className="product-content">
              <div className="product-desc_info">
                <h6>
                  <a
                    className="product-name cursor-pointer"
                    onClick={() => handleProductDetail(product.slug)}
                  >
                    Veniam officiis voluptates
                  </a>
                </h6>
                <div className="product-short_desc">
                  <p>{product.description}</p>
                </div>
              </div>
              <div className="add-actions">
                <ul>
                  <li
                    className="quick-view-btn"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick View"
                    >
                      <i className="ion-android-open" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="slide-inner">
        <div className="slide-image_area">
          <a
            onClick={() => handleProductDetail(product.slug)}
            className="cursor-pointer"
          >
            <img src={`${file_url}/${product.photo}`} alt={product.title} />
          </a>
        </div>
        <div className="slide-content_area">
          <h3>
            <a
              onClick={() => handleProductDetail(product.slug)}
              className="cursor-pointer"
            >
              {product.title}
            </a>
          </h3>
          <p>{product.summary}</p>
          <div className="uren-btn-ps_left">
            <a
              className="uren-btn cursor-pointer"
              onClick={() => handleProductDetail(product.slug)}
            >
              View
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
