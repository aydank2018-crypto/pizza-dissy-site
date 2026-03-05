import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'Pizza d\'Issy CMS',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [
      // Menu Item Schema
      {
        name: 'menuItem',
        title: 'Menu Item',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
          {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule) => Rule.required().positive(),
          },
          {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'menuCategory' }],
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'isSpecialty',
            title: 'Is Specialty',
            type: 'boolean',
            initialValue: false,
          },
          {
            name: 'allergens',
            title: 'Allergens',
            type: 'array',
            of: [{ type: 'string' }],
          },
        ],
      },

      // Menu Category Schema
      {
        name: 'menuCategory',
        title: 'Menu Category',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
          {
            name: 'order',
            title: 'Display Order',
            type: 'number',
          },
        ],
      },

      // Testimonial Schema
      {
        name: 'testimonial',
        title: 'Testimonial',
        type: 'document',
        fields: [
          {
            name: 'author',
            title: 'Author',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'role',
            title: 'Role/Title',
            type: 'string',
          },
          {
            name: 'content',
            title: 'Testimonial',
            type: 'text',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule) => Rule.required().min(1).max(5),
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
          },
          {
            name: 'isPublished',
            title: 'Published',
            type: 'boolean',
            initialValue: false,
          },
        ],
      },

      // Event Schema
      {
        name: 'event',
        title: 'Event',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
          {
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'startTime',
            title: 'Start Time',
            type: 'string',
          },
          {
            name: 'endTime',
            title: 'End Time',
            type: 'string',
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
          },
          {
            name: 'featured',
            title: 'Featured Event',
            type: 'boolean',
            initialValue: false,
          },
        ],
      },

      // Restaurant Info Schema
      {
        name: 'restaurantInfo',
        title: 'Restaurant Information',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Restaurant Name',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
          {
            name: 'address',
            title: 'Address',
            type: 'string',
          },
          {
            name: 'phone',
            title: 'Phone',
            type: 'string',
          },
          {
            name: 'email',
            title: 'Email',
            type: 'string',
          },
          {
            name: 'logo',
            title: 'Logo',
            type: 'image',
          },
          {
            name: 'banner',
            title: 'Banner Image',
            type: 'image',
          },
        ],
      },
    ],
  },
});
