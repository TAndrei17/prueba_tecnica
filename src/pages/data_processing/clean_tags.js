const cleanTags = (text) => text.replace(/<[^>]+>/g, ' ');

export default cleanTags;
