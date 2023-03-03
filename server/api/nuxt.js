export default defineEventHandler(() => {
  // handle query params const { name } = useQuery(event);

  //handle post data const { age } = await useBody(event);
  return {
    message: `Hello`,
  };
});
