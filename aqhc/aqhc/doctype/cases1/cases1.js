// Copyright (c) 2023, anas and contributors
// For license information, please see license.txt

frappe.ui.form.on('CASES1', {
    refresh: function(frm) {
     // Get the childtable.
     var childtable = frm.doc.money;
   
     // Calculate the sum of the values in the childtable.
     var sum_money = 0;
     for (var i = 0; i < childtable.length; i++) {
      sum_money += childtable[i].value_money;
     }
   
     // Set the value of the docktype field.
     frm.set_value('sum_money', sum_money);
    }
   });
   
   frappe.ui.form.on('CASES1', {
    refresh: function(frm) {
    // Get the childtable.
    var childtable = frm.doc.money;
   
    // Calculate the count of the values in the childtable.
    var count_money = childtable.length;
   
    // Set the value of the docktype field.
    frm.set_value('count_money', count_money);
    }
   });
   
   frappe.ui.form.on('FamilyTable1',{
   form_render: function(frm,cdt,cdn){
       let item = locals[cdt][cdn]
       item.code_fm=frm.doc.idcase
       frm.refresh_field('familymember')
   }
   });
   
   frappe.ui.form.on('protection1',{
   form_render: function(frm,cdt,cdn){
       let item = locals[cdt][cdn]
       item.code_pro1=frm.doc.idcase
       frm.refresh_field('type_date_v')
   }
   });
   
   frappe.ui.form.on('protection2',{
   form_render: function(frm,cdt,cdn){
       let item = locals[cdt][cdn]
       item.code_pro2=frm.doc.idcase
       frm.refresh_field('emergency_intervention')
   }
   });
   
   frappe.ui.form.on('Ref1',{
   form_render: function(frm,cdt,cdn){
       let item = locals[cdt][cdn]
       item.code_ref=frm.doc.idcase
       frm.refresh_field('referrals_table')
   }
   });
   
   frappe.ui.form.on('Visit1',{
   form_render: function(frm,cdt,cdn){
       let item = locals[cdt][cdn]
       item.code_visit=frm.doc.idcase
       frm.refresh_field('visits_table')
   }
   });
   
   frappe.ui.form.on('money1',{
   form_render: function(frm,cdt,cdn){
       let item = locals[cdt][cdn]
       item.code_money=frm.doc.idcase
       frm.refresh_field('money_table')
   }
   });
   
   frappe.ui.form.on('Plans1',{
   form_render: function(frm,cdt,cdn){
       let item = locals[cdt][cdn]
       item.code_plan1=frm.doc.idcase
       frm.refresh_field('plan')
   }
   });
   
   
   frappe.ui.form.on('Plans2',{
   form_render: function(frm,cdt,cdn){
       let item = locals[cdt][cdn]
       item.code_needs=frm.doc.idcase
       frm.refresh_field('needs')
   }
   });
   
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           frm.set_value('who_modified', frm.doc.modified_by);
       }
   });
   
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           frm.set_value('date_of_registration', frm.doc.creation);
       
       }
   });
   
   
   frappe.ui.form.on('Visit1',{
   form_render: function(frm,cdt,cdn){
       let item = locals[cdt][cdn]
       item.who_supervisor=frm.doc.supervisor
       frm.refresh_field('visits_table')
   }
   });
   
   frappe.ui.form.on('CASES1', {
     before_save: function(frm) {
       frm.set_value('lastupdate', frm.doc.modified);
     }
   });
   
   
   
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           // أضف دالة التحقق عند تحديث الصفحة
       },
   
       validate: function(frm) {
           // قم بالتحقق من تساوي قيمة phonern1 و phonern2
           if (frm.doc.phonern1 && frm.doc.phonern2 && frm.doc.phonern1 === frm.doc.phonern2) {
               frappe.confirm(
                   __("🤔 هاتف المستلم الأول والثاني متشابهين، أصلحه"),
                   function() {
                       // لا شيء يحدث عند النقر على "موافق"
                   },
                   __("I'm Agree")
               );
           }
       }
   });
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           // أضف دالة التحقق عند تحديث الصفحة
       },
   
       validate: function(frm) {
           // قم بالتحقق من قيمة hascard
           if (frm.doc.hascard === 'Yes/ نعم') {
               // قم بفحص إذا كانت قيمة idcard موجودة
               if (!frm.doc.idcard) {
                   frappe.msgprint(__("الطفل يملك بطاقة ولم تدخل رقمها 😊"));
                   frappe.validated = false;
               }
           }
       }
   });
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           // أضف دالة التحقق عند تحديث الصفحة
       },
   
       validate: function(frm) {
           // قم بالتحقق من قيمة tb_city2
           if (!frm.doc.tb_city2) {
               frappe.confirm(
                   __("🤔 أدخل مدينة 2 على الأقل"),
                   function() {
                       // لا شيء يحدث عند النقر على "موافق"
                   },
                   __("I'm Agree")
               );
           }
       }
   });
   
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           // أضف دالة التحقق عند تحديث الصفحة
       },
   
       validate: function(frm) {
           // قائمة بالحقول التي تحتاج للتحقق منها
           var fieldsToCheck = ['childname', 'recipientname1', 'recipientname2','fathername','mothername'];
   
           for (var i = 0; i < fieldsToCheck.length; i++) {
               var field = fieldsToCheck[i];
               var value = frm.doc[field];
               var fieldLabel = frappe.meta.get_label(frm.doc.doctype, field);
   
               // قم بفحص إذا كانت القيمة تحتوي على أقل من ثلاث كلمات
               if (value && value.split(' ').length < 3) {
                   frappe.throw(__('تنبيه: {0} يجب أن يحتوي على ثلاث كلمات على الأقل', [fieldLabel]));
               }
           }
       }
   });
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           // أضف دالة التحقق عند تحديث الصفحة
       },
   
       validate: function(frm) {
           // التحقق من الرقم الوطني في idrn1
           if (frm.doc.idrn1 && frm.doc.idrn1.length < 11) {
               frappe.confirm(
                   __("تأكيد: الرقم الوطني للمستلم الأول أقل من 11 محرف، أصلحه"),
                   function() {
                       // إجراء عند تأكيد المستخدم
                     
                   }
               );
               return;
           }
   
           // التحقق من الرقم الوطني في idrn2
           if (frm.doc.idrn2 && frm.doc.idrn2.length < 11) {
               frappe.confirm(
                   __("الرقم الوطني للمستلم الثاني أقل من 11 محرف، أصلحه"),
                   function() {
                       // إجراء عند تأكيد المستخدم
                   }
               );
               return;
           }
       }
   });
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           // أضف دالة التحقق عند تحديث الصفحة
       },
   
       before_save: function(frm) {
           // تحقق من أن التحديث يتم فقط للمستندات الجديدة
           if (frm.doc.__islocal) {
               // قم بحساب عدد السجلات في الجدول CASES1
               frappe.call({
                   method: 'frappe.client.get_count',
                   args: {
                       doctype: 'CASES1'
                   },
                   callback: function(response) {
                       if (response.message !== null) {
                           // زيادة القيمة بواحد وتحديث قيمة الحقل idcase
                           frm.set_value('idcase', response.message + 1);
                       }
                   }
               });
           }
       }
   });
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           // أضف دالة التحقق عند تحديث الصفحة
       },
   
       validate: function(frm) {
           // قم بالتحقق من قيمة hascard
           if (frm.doc.relativerelation == 'Mother/الأم') {
               if (frm.doc.mothername !== frm.doc.recipientname1) {
                   frappe.throw(__("اسم الأم في حقل الاستلام غير مشابه للأسم في معلومات الأسرة 😊"));
                   frappe.validated = false;
               }
           } else if (frm.doc.relativerelation == 'Father/ الاب') {
               if (frm.doc.fathername !== frm.doc.recipientname1) {
                   frappe.throw(__("اسم الأب في حقل الاستلام غير مشابه للأسم في معلومات الأسرة 😊"));
                   frappe.validated = false;
               }
           }
       }
   });
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           // أضف دالة التحقق عند تحديث الصفحة
       },
   
       validate: function(frm) {
           // قم بالتحقق من قيمة tb_city2
           if (!frm.doc.relation) {
               frappe.confirm(
                   __("🤔 أدخل صلة القرابة للمستلم الثاني"),
                   function() {
                       // لا شيء يحدث عند النقر على "موافق"
                   },
                   __("I'm Agree")
               );
           }
       }
   });
   
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           // أضف دالة التحقق عند تحديث الصفحة
       },
   
       validate: function(frm) {
           // قم بالتحقق من قيمة hascard
           if (frm.doc.relativerelation == 'Mother/الأم') {
               if (frm.doc.idmother !== frm.doc.idrn1) {
                   frappe.throw(__("وطني الأم غير صحيح 🤨😣"));
                   frappe.validated = false;
               }
           } else if (frm.doc.relativerelation == 'Father/ الاب') {
               if (frm.doc.idfather !== frm.doc.idrn1) {
                   frappe.throw(__("وطني الأب غير صحيح 🤨😣"));
                   frappe.validated = false;
               }
           }
       }
   });
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           // أضف دالة التحقق عند تحديث الصفحة
       },
   
       validate: function(frm) {
           // قم بالتحقق من قيمة hascard
           if (frm.doc.relation == 'Mother/الأم') {
               if (frm.doc.idmother !== frm.doc.idrn2) {
                   frappe.throw(__("وطني الأم غير صحيح 🤨😣"));
                   frappe.validated = false;
               }
           } else if (frm.doc.relation == 'Father/ الاب') {
               if (frm.doc.idfather !== frm.doc.idrn2) {
                   frappe.throw(__("وطني الأب غير صحيح 🤨😣"));
                   frappe.validated = false;
               }
           }
       }
   });
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           // أضف دالة التحقق عند تحديث الصفحة
       },
   
       validate: function(frm) {
           if (frm.doc.relation == 'Mother/الأم') {
               if (frm.doc.mothername !== frm.doc.recipientname2) {
                   frappe.throw(__("اسم الأم في حقل الاستلام غير مشابه للأسم في معلومات الأسرة 😊"));
                   frappe.validated = false;
               }
           } else if (frm.doc.relation == 'Father/ الاب') {
               if (frm.doc.fathername !== frm.doc.recipientname2) {
                   frappe.throw(__("اسم الأب في حقل الاستلام غير مشابه للأسم في معلومات الأسرة 😊"));
                   frappe.validated = false;
               }
           }
       }
   });
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           // أضف دالة التحقق عند تحديث الصفحة
       },
   
       validate: function(frm) {
           // قم بالتحقق من تكرار قيمة idrn1
           if (frm.doc.idrn1 || frm.doc.idrn2) {
               // هنا قم بفحص تكرار idrn1
               if (frm.doc.idrn1) {
                   frappe.call({
                       method: 'frappe.client.get_list',
                       args: {
                           doctype: 'CASES1',
                           filters: {
                               idrn1: frm.doc.idrn1,
                               name: ['!=', frm.doc.name]  // استبعاد الاستمارة الحالية من البحث
                           },
                           fields: ['name', 'idcase', 'childname']
                       },
                       callback: function(response) {
                           if (response.message && response.message.length > 0) {
                               // توجد استمارات أخرى تحمل نفس القيمة
                               var duplicate_forms = response.message.map(function(form) {
                                   return form.childname + ' (' + form.idcase + ')';
                               }).join(', ');
   
                               frappe.show_alert({
                                   message: __(" الرقم الوطني للمستلم الأول مكرر في استمارات الأطفال: {0}. ", [duplicate_forms]),
                                   indicator: 'red'
                               }, 30);  // العرض لمدة 50 ثانية
                           }
                       }
                   });
               }
   
               // ثم فحص تكرار idrn2
               if (frm.doc.idrn2) {
                   frappe.call({
                       method: 'frappe.client.get_list',
                       args: {
                           doctype: 'CASES1',
                           filters: {
                               idrn2: frm.doc.idrn2,
                               name: ['!=', frm.doc.name]  // استبعاد الاستمارة الحالية من البحث
                           },
                           fields: ['name', 'idcase', 'childname']
                       },
                       callback: function(response) {
                           if (response.message && response.message.length > 0) {
                               // توجد استمارات أخرى تحمل نفس القيمة
                               var duplicate_forms = response.message.map(function(form) {
                                   return form.childname + ' (' + form.idcase + ')';
                               }).join(', ');
   
                               frappe.show_alert({
                                   message: __(" الرقم الوطني للمستلم الثاني مكرر في استمارات الأطفال: {0}. ", [duplicate_forms]),
                                   indicator: 'orange'
                               }, 30);  // العرض لمدة 60 ثانية
                           }
                       }
                   });
               }
           }
       }
   });
   
   frappe.ui.form.on('CASES1', {
       refresh: function(frm) {
           // Add any page refresh logic here
       },
   
       validate: function(frm) {
           // Check for the uniqueness of idchild value
           if (frm.doc.idchild) {
               frappe.call({
                   method: 'frappe.client.get_list',
                   args: {
                       doctype: 'CASES1',
                       filters: {
                           idchild: frm.doc.idchild,
                           name: ['!=', frm.doc.name]  // Exclude the current form from the search
                       },
                       fields: ['idcase']
                   },
                   callback: function(response) {
                       if (response.message && response.message.length > 0) {
                           // There are other forms with the same idchild value
                           var duplicate_forms = response.message.map(function(form) {
                               return form.idcase;
                           }).join(', ');
   
                           frappe.msgprint(__("🤔 تنبيه: الرقم الوطني للطفل '{0}' مكررة في الاستمارة رقم: {1}", [frm.doc.idchild, duplicate_forms]));
                           frappe.validated = false;
                       } else {
                           frappe.validated = true; // Set validated to true if there is no duplicate
                       }
                   }
               });
           } else {
               frappe.validated = true; // Set validated to true if idchild is empty
           }
   
           // Return false to prevent the form from being saved in case of validation failure
           return frappe.validated;
       }
   });
   
   frappe.ui.form.on('CASES1', {
       before_save: function(frm) {
           var relativeRelation = frm.doc.relativerelation;
           if (relativeRelation === "Father/ الاب") {
               frm.set_value('birth_r1', frm.doc.fatherage);
           } 
           else if (relativeRelation === "Mother/الأم") {
               frm.set_value('birth_r1', frm.doc.motherage);
           }
       }
   });
   
   
   frappe.ui.form.on('CASES1', {
       before_save: function(frm) {
           var relativeRelation2 = frm.doc.relation;
           if (relativeRelation2 === "Father/ الاب") {
               frm.set_value('birth_r2', frm.doc.fatherage);
           } 
           else if (relativeRelation2 === "Mother/الأم") {
               frm.set_value('birth_r2', frm.doc.motherage);
           }
       }
   });