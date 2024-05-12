class users {
  constructor(
    id,
    email,
    encrypted_password,
    reset_password_token,
    reset_password_sent_at,
    remember_created_at,
    created_at,
    updated_at,
    tel,
    username,
    fblink,
    address,
    facebook,
    not_show_address,
    is_admin,
    confirmation_token,
    confirmed_at,
    confirmation_sent_at,
    unconfirmed_email
  ) {
    this.id = id;
    this.email = email;
    this.encrypted_password = encrypted_password;
    this.reset_password_token = reset_password_token;
    this.reset_password_sent_at = reset_password_sent_at;
    this.remember_created_at = remember_created_at;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.tel = tel;
    this.username = username;
    this.fblink = fblink;
    this.address = address;
    this.facebook = facebook;
    this.not_show_address = not_show_address;
    this.is_admin = is_admin;
    this.confirmation_token = confirmation_token;
    this.confirmed_at = confirmed_at;
    this.confirmation_sent_at = confirmation_sent_at;
    this.unconfirmed_email = unconfirmed_email;
  }
}

export default users;
