class notifications {
  constructor(
    id,
    recipient_type,
    recipient_id,
    type,
    params,
    read_at,
    created_at,
    updated_at,
  ) {
    this.id = id;
    this.recipient_type = recipient_type;
    this.recipient_id = recipient_id;
    this.type = type;
    this.params = params;
    this.read_at = read_at;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export default notifications;
