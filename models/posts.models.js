class posts {
  constructor(
    id,
    name,
    category,
    status,
    date,
    time,
    location,
    detail,
    reward,
    user_id,
    created_at,
    updated_at,
    lat,
    lng,
    type_id,
    reason,
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.status = status;
    this.date = date;
    this.time = time;
    this.location = location;
    this.detail = detail;
    this.reward = reward;
    this.user_id = user_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.lat = lat;
    this.lng = lng;
    this.type_id = type_id;
    this.reason = reason;
  }
}

export default posts;
