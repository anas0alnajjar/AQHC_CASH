// Copyright (c) 2023, anas and contributors
// For license information, please see license.txt



frappe.ui.form.on('childern_illnes',{
form_render: function(frm,cdt,cdn){
    let item = locals[cdt][cdn]
    item.family_code=frm.doc.family_code
    frm.refresh_field('tab_children_ill')
}
});

function sumChildren(frm) {
  // Get the values of the two fields.
  var chlid_males = parseInt(frm.doc.chlid_males);
  var chlid_females = parseInt(frm.doc.chlid_females);

  // Add the two values together.
  var sum = chlid_males + chlid_females;

  // Set the value of the `sum_children` field.
  frm.set_value('sum_children', sum);
}

// Call the `sumChildren()` function when the form is refreshed.
frappe.ui.form.on('basic_needs', {
  refresh: function(frm) {
    sumChildren(frm);
  }
});

function sumFamily(frm) {
  // Get the values of the two fields.
  var chlid_males = parseInt(frm.doc.chlid_males);
  var chlid_females = parseInt(frm.doc.chlid_females);
  var adults_male = parseInt(frm.doc.adults_male);
  var adults_female = parseInt(frm.doc.adults_female);
  // Add the two values together.
  var sum = chlid_males + chlid_females + adults_female + adults_male;

  // Set the value of the `sum_children` field.
  frm.set_value('total_family', sum);
}

// Call the `sumChildren()` function when the form is refreshed.
frappe.ui.form.on('basic_needs', {
  refresh: function(frm) {
    sumFamily(frm);
  }
});




frappe.ui.form.on('visits',{
form_render: function(frm,cdt,cdn){
    let item = locals[cdt][cdn]
    item.social_worker=frm.doc.social_worker
    frm.refresh_field('tab_visits')
}
});


frappe.ui.form.on('basic_needs', {
 refresh: function(frm) {
 // Get the childtable.
 var childtable = frm.doc.tab_visits;

 // Calculate the count of the values in the childtable.
 var count_visits = childtable.length;

 // Set the value of the docktype field.
 frm.set_value('count_visits', count_visits);
 }
});



frappe.ui.form.on('child',{
form_render: function(frm,cdt,cdn){
    let item = locals[cdt][cdn]
    item.family_code=frm.doc.family_code
    frm.refresh_field('tab_child')
}
});
