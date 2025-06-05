"use client";
import React from "react";

export default function ComponentsPage() {
  return (
    <div className="p-8 space-y-8 bg-red-200">
      <h1 className="text-3xl font-bold mb-4">DaisyUI Components Showcase</h1>

      {/* Button */}
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>

      {/* Card */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>This is a sample card using DaisyUI styles.</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      {/* Alert */}
      <div className="alert alert-success">
        <span>Success! Your action was successful.</span>
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />

      {/* Badge */}
      <span className="badge badge-info">Info Badge</span>
    </div>
  );
}
