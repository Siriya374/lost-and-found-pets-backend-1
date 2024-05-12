class active_storage_attachments {
  constructor(
    id,
    name,
    record_type,
    record_id,
    blob_id,
    created_at,
  ) {
    this.id = id;
    this.name = name;
    this.record_type = record_type;
    this.record_id = record_id;
    this.created_at = created_at;
    this.blob_id = blob_id;
  }
}

export default active_storage_attachments;
