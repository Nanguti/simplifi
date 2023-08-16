import Link from "next/link";

const About = () => {
  return (
    <>
      {/* Begin Simplifi Networks' Breadcrumb Area */}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Other</h2>
            <ul>
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li className="active">About Us</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Simplifi Networks' Breadcrumb Area End Here */}
      {/* Begin Simplifi Networks' About Us Area */}
      <div className="about-us-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-5">
              <div className="overview-img text-center img-hover_effect">
                <Link href="#">
                  <img
                    className="img-full"
                    src="assets/images/about-us/1.jpg"
                    objectFit="cover"
                    layout="fill"
                    alt="Simplifi Networks' About Us Image"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-7 d-flex align-items-center">
              <div className="overview-content">
                <h2>
                  Welcome To <span>Simplifi Networks</span>
                </h2>
                <p className="short_desc">
                  Simplifi Networks is a leading supplier of cutting-edge
                  technologies like Wireless Broadband, Wi-Fi, Networking, VoIP,
                  Fibre, and IP Video. We provide top-quality products,
                  extensive support, and financing solutions. Our East African
                  partners in Kenya, Uganda, Tanzania, Ethiopia, Congo, DRC,
                  Sudan, and Rwanda trust us for exceptional service. Our brands
                  include Ubiquiti, MikroTik, RUIJIE, and more.
                </p>
                <div className="uren-about-us_btn-area">
                  {/* <a class="about-us_btn" href="shop-left-sidebar.html">Shop Now</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Simplifi Networks' About Us Area End Here */}
      {/* Begin Simplifi Networks' Project Countdown Area */}
      <div className="project-count-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-count text-center">
                <div className="count-icon">
                  <span className="ion-ios-briefcase-outline" />
                </div>
                <div className="count-title">
                  <h2 className="count">2169</h2>
                  <span>Project Done</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-count text-center">
                <div className="count-icon">
                  <span className="ion-ios-wineglass-outline" />
                </div>
                <div className="count-title">
                  <h2 className="count">869</h2>
                  <span>Awards Winned</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-count text-center">
                <div className="count-icon">
                  <span className="ion-ios-lightbulb-outline" />
                </div>
                <div className="count-title">
                  <h2 className="count">689</h2>
                  <span>Hours Worked</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-count text-center">
                <div className="count-icon">
                  <span className="ion-happy-outline" />
                </div>
                <div className="count-title">
                  <h2 className="count">2169</h2>
                  <span>Happy Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Simplifi Networks' Project Countdown Area End Here */}
      {/* Begin Simplifi Networks' Team Area */}
      <div className="team-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section_title-2">
                <h3>Our Team</h3>
              </div>
            </div>
          </div>{" "}
          {/* section title end */}
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-member">
                <div className="team-thumb img-hover_effect">
                  <Link href="#">
                    <img
                      src="assets/images/about-us/team/1.png"
                      alt="Our Team Member"
                    />
                  </Link>
                </div>
                <div className="team-content text-center">
                  <h3>Ken Stober</h3>
                  <p>Co-founder</p>
                </div>
              </div>
            </div>{" "}
            {/* end single team member */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-member">
                <div className="team-thumb img-hover_effect">
                  <Link href="#">
                    <img
                      src="assets/images/about-us/team/2.png"
                      alt="Our Team Member"
                    />
                  </Link>
                </div>
                <div className="team-content text-center">
                  <h3>Graham Balcombe</h3>
                  <p>Co-founder</p>
                </div>
              </div>
            </div>{" "}
            {/* end single team member */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-member">
                <div className="team-thumb img-hover_effect">
                  <Link href="#">
                    <img
                      src="assets/images/about-us/team/3.png"
                      alt="Our Team Member"
                    />
                  </Link>
                </div>
                <div className="team-content text-center">
                  <h3>Regina Kaaria</h3>
                  <p>Accountant</p>
                </div>
              </div>
            </div>{" "}
            {/* end single team member */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-member">
                <div className="team-thumb img-hover_effect">
                  <Link href="#">
                    <img
                      src="assets/images/about-us/team/4.jpeg"
                      alt="Our Team Member"
                    />
                  </Link>
                </div>
                <div className="team-content text-center">
                  <h3>Ambrose Ahurra</h3>
                  <p>Support Engineer</p>
                </div>
              </div>
            </div>{" "}
            {/* end single team member */}
          </div>
        </div>
      </div>
      {/* Simplifi Networks' Team Area End Here */}
    </>
  );
};

export default About;
