class active_storage_blobs {
  constructor(
    id,
    key,
    filename,
    content_type,
    metadata,
    service_name,
    byte_size,
    checksum,
    created_at,
  ) {
    this.id = id;
    this.key = key;
    this.filename = filename;
    this.content_type = content_type;
    this.metadata = metadata;
    this.service_name = service_name;
    this.byte_size = byte_size;
    this.checksum = checksum;
    this.created_at = created_at;
  }
}

export default active_storage_blobs;
