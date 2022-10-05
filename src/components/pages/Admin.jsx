import React from 'react'

import AdminProducts from "./AdminProducts";

export default function admin() {
  return (
    <div className="admin">
        <div className="content">
            <h3>Products</h3>
            <AdminProducts />
        </div>
    </div>
  )
}
