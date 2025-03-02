import { defineType } from "sanity";

export default defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
    },
    {
      name: "customerEmail",
      title: "Customer Email",
      type: "string",
    },
    {
      name: "customerAddress",
      title: "Customer Address",
      type: "text",
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }],
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
            },
          ],
        },
      ],
    },
    {
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
    },
    {
      name: "orderStatus",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    },
    {
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      options: {
        list: [
          { title: "Credit Card", value: "credit_card" },
          { title: "PayPal", value: "paypal" },
          { title: "Cash on Delivery", value: "cash_on_delivery" },
        ],
      },
    },
    {
      name: "transactionId",
      title: "Transaction ID",
      type: "string",
    },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
    },
    // Stripe-specific fields
    {
      name: "stripePaymentIntentId",
      title: "Stripe Payment Intent ID",
      type: "string",
      description:
        "The ID of the Stripe Payment Intent associated with this order.",
    },
    {
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
      description: "The ID of the Stripe Customer associated with this order.",
    },
    {
      name: "stripePaymentStatus",
      title: "Stripe Payment Status",
      type: "string",
      options: {
        list: [
          { title: "Succeeded", value: "succeeded" },
          { title: "Pending", value: "pending" },
          { title: "Failed", value: "failed" },
          { title: "Refunded", value: "refunded" },
        ],
      },
      description: "The status of the payment in Stripe.",
    },
    {
      name: "stripePaymentAmount",
      title: "Stripe Payment Amount",
      type: "number",
      description:
        "The amount charged by Stripe (in the smallest currency unit, e.g., cents for USD).",
    },
    {
      name: "stripePaymentCurrency",
      title: "Stripe Payment Currency",
      type: "string",
      description: 'The currency used for the Stripe payment (e.g., "usd").',
    },
    {
      name: "stripePaymentReceiptUrl",
      title: "Stripe Payment Receipt URL",
      type: "url",
      description: "The URL to the Stripe payment receipt.",
    },
  ],
});
