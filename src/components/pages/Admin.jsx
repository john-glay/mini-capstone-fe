import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminBlogs from "../AdminBlogs";
import AdminPopularProducts from "../AdminPopularProducts";
import AdminProducts from "../AdminProducts";

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.email != "admin@admin.com") {
      navigate("/");
    }
  }, [navigate]);

  if (localStorage.email != "admin@admin.com") {
    return null;
  }

  return (
    <div className="admin">
      <div className="content">
        <h3>Products</h3>
        <AdminProducts />
        <br />
        <br />
        <h3>Blogs</h3>
        <AdminBlogs />
        <br />
        <br />
        <h3>Popular of this Year</h3>
        <AdminPopularProducts />
      </div>
    </div>
  );
}
