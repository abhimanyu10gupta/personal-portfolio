import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Jobtitle',
      type: 'string',
    }),
    defineField({
      name: "companyImage",
      title: "CompnayImage",
      type: "image",
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
        name: "dateStarted",
        title: "DateStarted",
        type: "date",
    }),
    defineField({
    name: "dateEnded",
    title: "DateEnded",
    type: "date",
    }),
    defineField({
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean",
    }),
    defineField({
      name: "technologies",
      title: "technologies",
      type: "array",
      of:[{type: "reference", to: {type:"skill"}}]
    }),
    defineField({
        name: "points",
        title: "Points",
        type: "array",
        of:[{type: "string"}]
      }),
  ],
})