import Brands from "@/components/Brands";
import RelatedProducts from "@/components/RelatedProduct";
import axiosClient from "@/utils/axios";
import ProductComponent from "@/components/ProductComponent";
import parse from "html-react-parser";
import Link from "next/link";

const ProductDetail = async ({ params }) => {
  const slug = params.product_slug;
  const file_url = process.env.NEXT_PUBLIC_STORAGE_URL;
  const res = await axiosClient.post(`/product/detail`, { slug });
  const { title, summary, description, photo, images } =
    res.data.product_detail;
  const related_products = res.data.product_detail.rel_prods;
  const brands = res.data.brands;
  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>{title}</h2>
            <ul>
              <li>
                <Link href="index.html">Home</Link>
              </li>
              <li className="active">{title}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="uren-product_area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title_area">
                <div className="gradient-title">Product's Details</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sp-area">
        <div className="container-fluid">
          <div className="sp-nav">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <ProductComponent
                    photo={photo}
                    file_url={file_url}
                    images={images}
                  />
                  <div className="sp-img_area">
                    <div className="sp-img_slider slick-img-slider uren-slick-slider"></div>
                    <div className="sp-img_slider-nav slick-slider-nav uren-slick-slider slider-navigation_style-3"></div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="sp-content">
                    <div className="sp-heading">
                      <h5>
                        <Link href="#">{title}</Link>
                      </h5>
                    </div>
                    <div className="sp-essential_stuff">
                      <p>{parse(summary)}</p>
                    </div>
                    <div className="uren-tag-line">
                      <h6>Share:</h6>
                    </div>
                    <div className="uren-social_link">
                      <ul>
                        <li className="facebook">
                          <Link
                            href="https://www.facebook.com/"
                            data-toggle="tooltip"
                            target="_blank"
                            title="Facebook"
                          >
                            <i className="fab fa-facebook" />
                          </Link>
                        </li>
                        <li className="twitter">
                          <Link
                            href="https://twitter.com/"
                            data-toggle="tooltip"
                            target="_blank"
                            title="Twitter"
                          >
                            <i className="fab fa-twitter-square" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sp-product-tab_area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="sp-product-tab_nav">
                <div className="product-tab">
                  <ul className="nav product-menu">
                    <li>
                      <a
                        className="active"
                        data-toggle="tab"
                        href="#description"
                      >
                        <span>Description</span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#specification">
                        <span>Specification</span>
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#reviews">
                        <span>Reviews (1)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content uren-tab_content">
                  <div
                    id="description"
                    className="tab-pane active show"
                    role="tabpanel"
                  >
                    <div className="product-description">{description}</div>
                  </div>
                  <div id="specification" className="tab-pane" role="tabpanel">
                    <table className="table table-bordered specification-inner_stuff">
                      <tbody>
                        <tr>
                          <td colSpan={2}>
                            <strong>Memory</strong>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>test 1</td>
                          <td>8gb</td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td colSpan={2}>
                            <strong>Processor</strong>
                          </td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td>No. of Cores</td>
                          <td>1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div id="reviews" className="tab-pane" role="tabpanel">
                    <div className="tab-pane active" id="tab-review">
                      <form className="form-horizontal" id="form-review">
                        <div id="review">
                          <table className="table table-striped table-bordered">
                            <tbody>
                              <tr>
                                <td style={{ width: "50%" }}>
                                  <strong>Customer</strong>
                                </td>
                                <td className="text-right">15/09/20</td>
                              </tr>
                              <tr>
                                <td colSpan={2}>
                                  <p>Good product! Thank you very much</p>
                                  <div className="rating-box">
                                    <ul>
                                      <li>
                                        <i className="ion-android-star" />
                                      </li>
                                      <li>
                                        <i className="ion-android-star" />
                                      </li>
                                      <li>
                                        <i className="ion-android-star" />
                                      </li>
                                      <li>
                                        <i className="ion-android-star" />
                                      </li>
                                      <li>
                                        <i className="ion-android-star" />
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <h2>Write a review</h2>
                        <div className="form-group required">
                          <div className="col-sm-12 p-0">
                            <label>
                              Your Email <span className="required">*</span>
                            </label>
                            <input
                              className="review-input"
                              type="email"
                              name="con_email"
                              id="con_email"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="form-group required second-child">
                          <div className="col-sm-12 p-0">
                            <label className="control-label">
                              Share your opinion
                            </label>
                            <textarea
                              className="review-textarea"
                              name="con_message"
                              id="con_message"
                              defaultValue={""}
                            />
                            <div className="help-block">
                              <span className="text-danger">Note:</span> HTML is
                              not translated!
                            </div>
                          </div>
                        </div>
                        <div className="form-group last-child required">
                          <div className="col-sm-12 p-0">
                            <div className="your-opinion">
                              <label>Your Rating</label>
                              <span>
                                <select className="star-rating">
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                  <option value={5}>5</option>
                                </select>
                              </span>
                            </div>
                          </div>
                          <div className="uren-btn-ps_right">
                            <button className="uren-btn-2">Continue</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="uren-product_area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title_area">
                <div className="gradient-title">Related Products</div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 p-4">
                {related_products.map((product, index) => (
                  <RelatedProducts
                    key={index}
                    product={product}
                    file_url={file_url}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uren-brand_area">
        <div className="container-fluid">
          <div className="section-title_area">
            <div className="gradient-title">Top Partners</div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="featured-categories_slider brand-slider uren-slick-slider slider-navigation_style-1 img-hover-effect_area">
                <Brands brands={brands} file_url={file_url} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
