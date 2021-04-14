export default {
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "demo",
      title: "Demo",
      type: "url",
    },
    {
      name: "repo",
      title: "Repo",
      type: "url",
    },

    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tech",
      title: "Tech",
      type: "array",
      of: [{ type: "reference", to: { type: "tech" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",

      media: "mainImage",
    },
    prepare(selection) {
      const { title } = selection;
      return Object.assign({}, selection, {
        subtitle: title && `Project ${title}`,
      });
    },
  },
};
