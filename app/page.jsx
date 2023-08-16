import Banners from "@/components/Banners";
import Brands from "@/components/Brands";
import FeaturedProducts from "@/components/FeaturedProducts";
import axiosClient from "@/utils/axios";
import Image from "next/image";
import Link from "next/link";
export const revalidate = 0;
const Home = async () => {
  const file_url = process.env.STORAGE_URL;
  const response = await axiosClient.get(`/home`);
  const { banners, brands, featured_products, posts } = response.data;
  return (
    <>
      <div className="uren-slider_area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-slider slider-navigation_style-2">
                <Banners banners={banners} file_url={file_url} />
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
      {/* Begin Featured Categories Area */}

      <div className="featured-categories_area">
        <div className="container-fluid ">
          <div className="section-title_area">
            <div className="gradient-title">Featured Products</div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="featured-categories_slider uren-slick-slider slider-navigation_style-1">
                <FeaturedProducts
                  products={featured_products}
                  file_url={file_url}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-container"></div>
      {/* Begin Blog Area */}
      <div className="uren-blog_area bg--white_smoke">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title_area">
                <span>Our Recent Posts</span>
                <div className="gradient-title">From Our Blogs</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {posts.map((post) => (
                  <div className="slide-item" key={post.id}>
                    <Link href={`blog/${post.slug}`}>
                      <div className="inner-slide">
                        <div className="blog-img img-hover_effect">
                          <a className="cursor-pointer" tabIndex="0">
                            <img
                              src={`${file_url}/${post.photo}`}
                              alt={post.title}
                            />
                          </a>
                          <span className="post-date">
                            {post.created_at.substring(0, 10)}
                          </span>
                        </div>
                        <div className="blog-content">
                          <h3>
                            <a className="cursor-pointer" tabIndex="0">
                              {post.title}
                            </a>
                          </h3>
                          <p>{post.summary}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-container"></div>
    </>
  );
};

export default Home;
