import BlogSidebar from "@/components/BlogSidebar";
import axiosClient from "@/utils/axios";
import Link from "next/link";

const PostDetail = async ({ params }) => {
  const slug = params.post_slug;
  const file_url = process.env.STORAGE_URL;
  const response = await axiosClient.post(`/post/details`, { slug });
  console.log("log response here" + response);
  const { title, photo, summary, description, created_at, tags } =
    response.data.post;
  const recent_posts = response.data.recent_posts;
  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Blog Details</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="active">{title}</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Uren's Breadcrumb Area End Here */}
      {/* Begin Uren's Blog Details Right Sidebar Area */}
      <div className="uren-blog_area uren-blog-details">
        <div className="container-fluid">
          <div className="row">
            <BlogSidebar recent_posts={recent_posts} file_url={file_url} />
            <div className="col-lg-9 order-1">
              <div className="blog-item">
                <div className="blog-img img-hover_effect">
                  <Link href="blog-details-left-sidebar.html">
                    <img src={`${file_url}/${photo}`} alt="Uren's Blog Image" />
                  </Link>
                  <span className="post-date">
                    {created_at.substring(0, 10)}
                  </span>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="blog-details-left-sidebar.html">{title}</Link>
                  </h3>
                  <p>{summary}</p>
                </div>
                <div className="uren-blog-blockquote">
                  <blockquote>
                    <p>{description}</p>
                  </blockquote>
                </div>
                <div className="blog-additional_information">
                  <p></p>
                </div>
                <div className="uren-tag-line">
                  <h4>Tag:</h4>
                  <Link href="#)">{tags}</Link>,
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
                    <li className="google-plus">
                      <Link
                        href="https://www.plus.google.com/discover"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Google Plus"
                      >
                        <i className="fab fa-google-plus" />
                      </Link>
                    </li>
                    <li className="instagram">
                      <Link
                        href="https://rss.com/"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Instagram"
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="uren-comment-section">
                  <h3>03 comment</h3>
                  <ul>
                    <li>
                      <div className="author-avatar">
                        <img src="/assets/images/blog/user.jpg" alt="User" />
                      </div>
                      <div className="comment-body">
                        <span className="reply-btn">
                          <Link href="#)">reply</Link>
                        </span>
                        <h5 className="comment-author">Anny Adams</h5>
                        <div className="comment-post-date">
                          25 September, 2019 at 10:30am
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Enim maiores adipisci optio ex, laboriosam
                          facilis non pariatur itaque illo sunt?
                        </p>
                      </div>
                    </li>
                    <li className="comment-children">
                      <div className="author-avatar">
                        <img src="/assets/images/blog/admin.jpg" alt="Admin" />
                      </div>
                      <div className="comment-body">
                        <span className="reply-btn">
                          <Link href="#)">reply</Link>
                        </span>
                        <h5 className="comment-author">Edwin Adams</h5>
                        <div className="comment-post-date">
                          25 September, 2019 at 11:00am
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Enim maiores adipisci optio ex, laboriosam
                          facilis non pariatur itaque illo sunt?
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="author-avatar">
                        <img src="/assets/images/blog/user.jpg" alt="User" />
                      </div>
                      <div className="comment-body">
                        <span className="reply-btn">
                          <Link href="#)">reply</Link>
                        </span>
                        <h5 className="comment-author">Anny Adams</h5>
                        <div className="comment-post-date">
                          25 September, 2019 at 06:50pm
                        </div>
                        <p>Thank You :)</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="uren-blog-comment-wrapper">
                  <h3>leave a reply</h3>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <form action="#)">
                    <div className="comment-post-box">
                      <div className="row">
                        <div className="col-lg-12">
                          <label>comment</label>
                          <textarea
                            name="commnet"
                            placeholder="Write a comment"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <label>Name</label>
                          <input
                            type="text"
                            className="coment-field"
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <label>Email</label>
                          <input
                            type="text"
                            className="coment-field"
                            placeholder="Email"
                          />
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <label>Website</label>
                          <input
                            type="text"
                            className="coment-field"
                            placeholder="Website"
                          />
                        </div>
                        <div className="col-lg-12">
                          <div className="comment-btn_wrap f-left">
                            <div className="uren-post-btn_area">
                              <Link
                                className="uren-btn-2"
                                href="#"
                              >
                                Post comment
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
