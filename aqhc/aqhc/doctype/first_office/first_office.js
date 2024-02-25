// Copyright (c) 2024, anas and contributors
// For license information, please see license.txt

// frappe.ui.form.on("First Office", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('First Office', {
    refresh: function(frm) {
        frm.set_value('who_edit', frm.doc.modified_by);
    }
});

