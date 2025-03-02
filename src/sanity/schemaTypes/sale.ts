import { defineField, defineType } from "sanity";

export default defineType({
  name: "sale",
  title: "Sale",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Sale Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "discountType",
      title: "Discount Type",
      type: "string",
      options: {
        list: [
          { title: "Percentage", value: "percentage" },
          { title: "Fixed Amount", value: "fixed" },
        ],
      },
      initialValue: "percentage",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "discountAmount",
      title: "Discount Amount",
      type: "number",
      description: "Amount off in percentage or fixed value.",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "couponCode",
      title: "Coupon Code",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "validFrom",
      title: "Valid From",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "validUntil",
      title: "Valid Until",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Toggle to activate/deactivate the sale.",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      discountType: "discountType",
      discountAmount: "discountAmount",
      couponCode: "couponCode",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, discountType, discountAmount, couponCode, isActive } =
        selection;
      const status = isActive ? "Active" : "Inactive";
      const discountText =
        discountType === "percentage"
          ? `${discountAmount}% off`
          : `$${discountAmount} off`;
      return {
        title,
        subtitle: `${discountText} - Code: ${couponCode} - ${status}`,
      };
    },
  },
});
