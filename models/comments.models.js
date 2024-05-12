class comments {
  constructor(
    id,
    post_id,
    user_id,
    created_at,
    updated_at,
    content,
  ) {
    this.id = id;
    this.post_id = post_id;
    this.user_id = user_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.content = content;
  }
}

export default comments;
