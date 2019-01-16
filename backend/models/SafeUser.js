function SafeUser(user) {
    this.id = user.id
    this.username = user.username
    this.isAdmin = (user.isAdmin ? user.isAdmin : false)
    this.createdAt = user.createdAt
    this.updatedAt = user.updatedAt
}

module.exports = SafeUser