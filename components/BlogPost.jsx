"use client";

import { useRouter } from "next/navigation";

const BlogPost = ({ post, page, file_url }) => {
    const router = useRouter();
    const post_date = post.created_at;
    const format_date = post_date.substring(0, 10);
    const handlePostDetail = (slug) => {
        router.push(`/blog/${slug}`);
    };
    if (page == "home-page") {
        return (
            <div className="inner-slide">
                <div className="blog-img img-hover_effect">
                    <a
                        onClick={() => handlePostDetail(post.slug)}
                        className="cursor-pointer"
                    >
                        <img
                            src={`${file_url}/${post.photo}`}
                            alt={post.title}
                        />
                    </a>
                    <span className="post-date">{format_date}</span>
                </div>
                <div className="blog-content">
                    <h3>
                        <a
                            onClick={() => handlePostDetail(post.slug)}
                            className="cursor-pointer"
                        >
                            {post.title}
                        </a>
                    </h3>
                    <p>{post.summary}</p>
                </div>
            </div>
        );
    }
    return (
        <div className="blog-item">
            <div className="blog-img img-hover_effect">
                <a
                    onClick={() => handlePostDetail(post.slug)}
                    className="cursor-pointer"
                >
                    <img src={`${file_url}/${post.photo}`} alt={post.title} />
                </a>
                <span className="post-date">{format_date}</span>
            </div>
            <div className="blog-content">
                <h3>
                    <a
                        onClick={() => handlePostDetail(post.slug)}
                        className="cursor-pointer"
                    >
                        {post.title}
                    </a>
                </h3>
                <p>{post.summary}</p>
                <div className="uren-btn-ps_left">
                    <a
                        className="uren-btn-2 cursor-pointer"
                        onClick={() => handlePostDetail(post.slug)}
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
