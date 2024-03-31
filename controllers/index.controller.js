exports.homeView = (req, res) => {
  res.render("pages/home", { title: "Home", active: "home" });
};
exports.aboutView = (req, res) => {
  res.render("pages/about", { title: "About", active: "about" });
};
exports.formView = (req, res) => {
  res.render("pages/form", { title: "form", active: "from" });
};
exports.formSuccessView = (req, res) => {
  res.render("pages/form-success", { title: "Form Success", active: "form" });
};
