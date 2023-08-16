"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BlogSidebar = ({ recent_posts, file_url }) => {
    const router = useRouter();
    const handlePostDetail = () => {
        router.push(`/blog/${slug}`);
    };
    return (
        <div className="col-lg-3 order-2">
            <div className="uren-blog-sidebar-wrapper">
                <div className="uren-blog-sidebar">
                    <h4 className="uren-blog-sidebar-title">Search</h4>
                    <div className="search-form_area">
                        <form
                            className="search-form"
                            action="#"
                        >
                            <input
                                type="text"
                                className="search-field"
                                placeholder="search here"
                            />
                            <button type="submit" className="search-btn">
                                <i className="ion-ios-search" />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="uren-blog-sidebar">
                    <h4 className="uren-blog-sidebar-title">Archives</h4>
                    <ul className="uren-blog-archive">
                        <li>
                            <Link href="#">September 2019</Link>
                        </li>
                    </ul>
                </div>
                <div className="uren-blog-sidebar">
                    <h4 className="uren-blog-sidebar-title">Recent Posts</h4>
                    {recent_posts.map((post) => (
                        <div className="recent-post">
                            <div className="recent-post_thumb">
                                <a
                                    onClick={() => handlePostDetail(post.slug)}
                                    className="cursor-pointer"
                                >
                                    <img
                                        className="img-full"
                                        src={`${file_url}/${post.photo}`}
                                        alt={post.title}
                                    />
                                </a>
                            </div>
                            <div className="recent-post_desc">
                                <span>
                                    <a
                                        onClick={() =>
                                            handlePostDetail(post.slug)
                                        }
                                        className="cursor-pointer"
                                    >
                                        {post.title}
                                    </a>
                                </span>
                                <span className="post-date">
                                    {post.created_at.substring(0, 10)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="uren-blog-sidebar">
                    <h4 className="uren-blog-sidebar-title">Comments</h4>
                    <div className="recent-comment">
                        <div className="user-img">
                            <img
                                className="img-full"
                                src="/assets/images/blog/admin.jpg"
                                alt="Uren's Blog Image"
                            />
                        </div>
                        <div className="user-info">
                            <span>HasTech say:</span>
                            <Link href="">
                                Nulla auctor mi vel nisl...
                            </Link>
                        </div>
                    </div>
                    <div className="recent-comment">
                        <div className="user-img">
                            <img
                                className="img-full"
                                src="/assets/images/blog/user.jpg"
                                alt="Uren's Blog Image"
                            />
                        </div>
                        <div className="user-info">
                            <span>Kathy Young say:</span>
                            <Link href="">
                                Mauris Venenatis Orci Quis...
                            </Link>
                        </div>
                    </div>
                    <div className="recent-comment">
                        <div className="user-img">
                            <img
                                className="img-full"
                                src="/assets/images/blog/admin.jpg"
                                alt="Uren's Blog Image"
                            />
                        </div>
                        <div className="user-info">
                            <span>HasTech say:</span>
                            <Link href="">
                                Quisque Semper Nunc Vitae...
                            </Link>
                        </div>
                    </div>
                    <div className="recent-comment">
                        <div className="user-img">
                            <img
                                className="img-full"
                                src="/assets/images/blog/user.jpg"
                                alt="Uren's Blog Image"
                            />
                        </div>
                        <div className="user-info">
                            <span>Kathy Young say:</span>
                            <Link href="#">
                                Thanks for the information, anyway :)
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="uren-blog-sidebar">
                    <h4 className="uren-blog-sidebar-title">Tags</h4>
                    <ul className="uren-tags_list">
                        <li>
                            <Link href="#">Sports</Link>
                        </li>
                        <li>
                            <Link href="#">Car</Link>
                        </li>
                        <li>
                            <Link href="#">Vehicle</Link>
                        </li>
                        <li>
                            <Link href="#">Bike</Link>
                        </li>
                        <li>
                            <Link href="#">Motorcycle</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;
