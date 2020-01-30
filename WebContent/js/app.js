
        $(document).ready(function () {
            $("#grid").kendoGrid({
                dataSource: {
                    type: "odata",
                    transport: {
                        read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
                    },
                    pageSize: 20
                },
                height: 550,
                groupable: true,
                sortable: true,
                pageable: {
                    refresh: true,
                    pageSizes: true,
                    buttonCount: 5
                },
                columns: [{
                    template: "<div class='customer-photo'" +
                    "style='background-image: url(../content/web/Customers/#:data.CustomerID#.jpg);'></div>" +
                    "<div class='customer-name'>#: ContactName #</div>",
                    field: "ContactName",
                    title: "联系人名",
                    width: 240
                }, {
                    field: "ContactTitle",
                    title: "头衔"
                }, {
                    field: "CompanyName",
                    title: "公司名"
                }, {
                    field: "Country",
                    width: 150
                }]
            });
        });