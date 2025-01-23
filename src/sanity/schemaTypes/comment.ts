
 const  commentsSchema ={
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'carSlug',
        title: 'Car Slug',
        type: 'string',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'text',
      },
    ],
  };
  export default commentsSchema;