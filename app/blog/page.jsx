import BlogPost from "@/components/BlogPost";
import axiosClient from "@/utils/axios";
import Link from "next/link";

const Blog = async () => {
    const file_url = process.env.STORAGE_URL;
    const res = await axiosClient.get(`/posts`);
    const posts = res.data.posts.data;
    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2>Blog</h2>
                        <ul>
                            <li>
                                <Link href="index.html">Home</Link>
                            </li>
                            <li className="active">Blog</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="uren-blog_area grid-view_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row blog-item_wrap">
                                {posts.map((post) => (
                                    <div className="col-lg-4" key={post.id}>
                                        <BlogPost
                                            post={post}
                                            page="blog-page"
                                            file_url={file_url}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="uren-paginatoin-area">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <ul className="uren-pagination-box carlet-color">
                                                    <li className="active">
                                                        <Link href="#">
                                                            1
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            2
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            3
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            4
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            5
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="Next"
                                                            href="#"
                                                        >
                                                            Next
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
            </div>
        </>
    );
};

export default Blog;
