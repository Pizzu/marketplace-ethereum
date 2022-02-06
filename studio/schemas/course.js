const courseSchema = {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Course title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "type",
      title: "Type",
      type: "string"
    },
    {
      name: "description",
      title: "Course description",
      type: "text"
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "skills",
      title: "Course Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Icon Image",
              type: "image"
            },
            {
              name: "title",
              title: "Title",
              type: "string"
            },
            {
              name: "description",
              title: "Description",
              type: "text"
            }
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
            prepare({title, media}) {
              return {
                title: `- ${title}`,
                media
              }
            }
          }
        }
      ]
    },
    {
      name: "lectures",
      title: "Course Lectures",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: [
          {title: "Red", value: "primary"},
          {title: "Blue", value: "blue"},
          {title: "Green", value: "green"},
          {title: "Purple", value: "purple"},
        ]
      }
    },
    {
      name: "isFeatured",
      title: "Is Featured",
      type: "boolean",
      initialValue: false
    }
  ]
}

export default courseSchema