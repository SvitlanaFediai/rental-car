import React from "react";
import PathConstants from "./pathConstans";

const Home = React.lazy(() => import("../pages/home/home"));
const About = React.lazy(() => import("../pages/about/about"));
const CarListing = React.lazy(() => import("../pages/carListing/carListing"));
const CarDetails = React.lazy(() => import("../pages/carDetails/carDetails"));
const Blog = React.lazy(() => import("../pages/blog/blog"));
const BlogDetails = React.lazy(() =>
  import("../pages/blogDetails/blogDetails")
);
const Contact = React.lazy(() => import("../pages/contact/contact"));
const Payment = React.lazy(() => import("../pages/payment/payment"));

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.ABOUT, element: <About /> },
  { path: PathConstants.CAR_LISTING, element: <CarListing /> },
  { path: PathConstants.CAR_DETAILS, element: <CarDetails /> },
  { path: PathConstants.PAYMENT, element: <Payment /> },
  { path: PathConstants.BLOG, element: <Blog /> },
  { path: PathConstants.BLOG_DETAILS, element: <BlogDetails /> },
  { path: PathConstants.CONTACT, element: <Contact /> },
];

/*const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:carName" element={<CarDetails />} />
      <Route path="/cars/:carName/payment" element={<Payment />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:title" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/:type" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};*/

export default routes;
