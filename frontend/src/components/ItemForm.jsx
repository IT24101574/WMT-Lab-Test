import { useState } from "react";

function ItemForm({ initialValues, onSubmit, submitText }) {
  const [formData, setFormData] = useState(
    initialValues
      ? {
          name: initialValues.name || "",
          category: initialValues.category || "",
          price: initialValues.price || "",
          description: initialValues.description || "",
          imageUrl: initialValues.imageUrl || "",
          customerReviewCount: initialValues.customerReviewCount ?? "",
        }
      : {
          name: "",
          category: "",
          price: "",
          description: "",
          imageUrl: "",
          customerReviewCount: "",
        }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      description: formData.description,
      imageUrl: formData.imageUrl,
      customerReviewCount: Number(formData.customerReviewCount),
    };
    console.log("Submitting payload:", payload);
    onSubmit(payload);
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <label>Item Name</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Category</label>
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <label>Price</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        min="0"
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        rows="4"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label>Image URL</label>
      <input
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
      />

      <label>Customer Review Count</label>
      <input
        type="number"
        name="customerReviewCount"
        value={formData.customerReviewCount}
        onChange={handleChange}
        min="0"
        required
      />

      <button className="btn primary" type="submit">
        {submitText}
      </button>
    </form>
  );
}

export default ItemForm;