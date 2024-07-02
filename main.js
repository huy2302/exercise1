$(document).ready(function () {
    // example data
    let devices = [
        { DeviceID: 1, Name: "TV", Action: "Turn On", Date: "124689" },
        { DeviceID: 2, Name: "Selling Fan", Action: "Turn Off", Date: "124533" },
        { DeviceID: 3, Name: "Washer", Action: "Sleep", Date: "152364" },
        { DeviceID: 4, Name: "TV", Action: "Turn Off", Date: "124900" },
        { DeviceID: 5, Name: "Refrigerator", Action: "Start", Date: "125000" },
        { DeviceID: 6, Name: "Selling Fan", Action: "Turn On", Date: "124600" },
        { DeviceID: 7, Name: "Washer", Action: "Wake Up", Date: "152400" },
        { DeviceID: 8, Name: "TV", Action: "Change Channel", Date: "125400" },
        { DeviceID: 9, Name: "Selling Fan", Action: "Adjust Speed", Date: "124700" },
        { DeviceID: 10, Name: "Refrigerator", Action: "Stop", Date: "124800" },
        { DeviceID: 11, Name: "TV", Action: "Mute", Date: "124200" },
        { DeviceID: 12, Name: "Selling Fan", Action: "Turn Off", Date: "124300" },
        { DeviceID: 13, Name: "Washer", Action: "Rinse", Date: "153200" },
        { DeviceID: 14, Name: "TV", Action: "Change Volume", Date: "125600" },
        { DeviceID: 15, Name: "Refrigerator", Action: "Defrost", Date: "125100" },
        { DeviceID: 16, Name: "Selling Fan", Action: "Turn On", Date: "124800" },
        { DeviceID: 17, Name: "Washer", Action: "Dry", Date: "153400" },
        { DeviceID: 18, Name: "TV", Action: "Turn On", Date: "124500" },
        { DeviceID: 19, Name: "Refrigerator", Action: "Start Cooling", Date: "125200" },
        { DeviceID: 20, Name: "Selling Fan", Action: "Adjust Speed", Date: "124900" },
        { DeviceID: 21, Name: "TV", Action: "Turn Off", Date: "124700" },
        { DeviceID: 22, Name: "Selling Fan", Action: "Turn On", Date: "124800" },
        { DeviceID: 23, Name: "Washer", Action: "Spin", Date: "153600" },
        { DeviceID: 24, Name: "TV", Action: "Change Channel", Date: "125800" },
        { DeviceID: 25, Name: "Refrigerator", Action: "Stop Cooling", Date: "125300" },
        { DeviceID: 26, Name: "Selling Fan", Action: "Turn Off", Date: "124400" },
        { DeviceID: 27, Name: "Washer", Action: "Rinse", Date: "153800" },
        { DeviceID: 28, Name: "TV", Action: "Turn On", Date: "124300" },
        { DeviceID: 29, Name: "Refrigerator", Action: "Start", Date: "125400" },
        { DeviceID: 30, Name: "Selling Fan", Action: "Turn On", Date: "124500" },
        { DeviceID: 31, Name: "Washer", Action: "Dry", Date: "154000" },
        { DeviceID: 32, Name: "TV", Action: "Change Volume", Date: "126000" },
        { DeviceID: 33, Name: "Refrigerator", Action: "Defrost", Date: "125500" },
        { DeviceID: 34, Name: "Selling Fan", Action: "Adjust Speed", Date: "125200" },
        { DeviceID: 35, Name: "Washer", Action: "Spin", Date: "154200" },
        { DeviceID: 36, Name: "TV", Action: "Turn Off", Date: "124800" },
        { DeviceID: 37, Name: "Refrigerator", Action: "Start Cooling", Date: "125600" },
        { DeviceID: 38, Name: "Selling Fan", Action: "Turn Off", Date: "124600" },
        { DeviceID: 39, Name: "Washer", Action: "Rinse", Date: "154400" },
        { DeviceID: 40, Name: "TV", Action: "Change Channel", Date: "126200" },
        { DeviceID: 41, Name: "Refrigerator", Action: "Stop Cooling", Date: "125700" },
        { DeviceID: 42, Name: "Selling Fan", Action: "Turn On", Date: "125000" },
        { DeviceID: 43, Name: "Washer", Action: "Dry", Date: "154600" },
        { DeviceID: 44, Name: "TV", Action: "Turn On", Date: "125000" },
        { DeviceID: 45, Name: "Refrigerator", Action: "Start", Date: "125800" },
        { DeviceID: 46, Name: "Selling Fan", Action: "Adjust Speed", Date: "125400" },
        { DeviceID: 47, Name: "Washer", Action: "Sleep", Date: "154800" },
        { DeviceID: 48, Name: "TV", Action: "Mute", Date: "125200" },
        { DeviceID: 49, Name: "Refrigerator", Action: "Stop", Date: "125900" },
        { DeviceID: 50, Name: "Selling Fan", Action: "Turn Off", Date: "125100" },
        { DeviceID: 51, Name: "Selling Fan", Action: "Turn Off", Date: "125100" }
    ];

    console.log(devices);
    let totalDevices = [
        {
            Device: "TV",
            MACAddress: "00:1A:2B:3C:4D:5E",
            IP: "192.168.1.100",
            CreatedDate: "2023-06-15",
            PowerConsumption: 50
        },
        {
            Device: "Washer",
            MACAddress: "00:2A:3B:4C:5D:6E",
            IP: "192.168.1.101",
            CreatedDate: "2023-07-01",
            PowerConsumption: 60
        },
        {
            Device: "Refrigerator",
            MACAddress: "00:3A:4B:5C:6D:7E",
            IP: "192.168.1.102",
            CreatedDate: "2023-09-10",
            PowerConsumption: 80
        },
        {
            Device: "Selling Fan",
            MACAddress: "00:3A:4B:5C:6D:7E",
            IP: "127.0.0.5",
            CreatedDate: "2024-07-10",
            PowerConsumption: 100
        }
    ];
    // Function to populate the table total devices
    function populateTableTotalDevices(data) {
        // render list devices
        let tbody = $('.overview-table tbody');
        tbody.empty();

        $.each(data, function (index, device) {
            const row = `<tr>
                            <td>${device.Device}</td>
                            <td>${device.MACAddress}</td>
                            <td>${device.IP}</td>
                            <td>${device.CreatedDate}</td>
                            <td>${device.PowerConsumption}</td>
                        </tr>`;
            tbody.append(row);
        });

        // render total row
        const row = `<tr class="overview-total">
                            <td colspan="4">Total</td>
                            <td>${calculateTotal(data)}</td>
                        </tr>`;
        tbody.append(row);
    }

    // Function calculate total devices
    function calculateTotal(data) {
        let total = 0;
        $.each(data, function (index, device) {
            total += device.PowerConsumption;
        });
        return total;
    }

    populateTableTotalDevices(totalDevices);

    // Function render list devices
    function populateTableDevices(data, currentPage) {
        // render list devices
        let tbody = $('.devices-table tbody');
        tbody.empty();

        let currentItem = 7 * (currentPage - 1);

        $.each(data.slice(currentItem, currentItem + 7), function (index, device) {
            const row = `<tr>
                            <td>${device.DeviceID}</td>
                            <td>${device.Name}</td>
                            <td>${device.Action}</td>
                            <td>${device.Date}</td>
                        </tr>`;
            tbody.append(row);
        });

        // render total row
        const row = `<tr class="overview-total">
                            <td colspan="3">Total</td>
                            <td>${data.length}</td>
                        </tr>`;
        tbody.append(row);
    }

    populateTableDevices(devices, 1);


    // paginate

    function createPaginate(data) {
        const itemsPerPage = 7; // number of page
        let currentPage = 1;    // current page

        // display table
        function displayData(page) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const paginatedData = data.slice(startIndex, endIndex);

            const tbody = $('#device-table-body');
            tbody.empty(); // clear data 

            $.each(paginatedData, function (index, device) {
                const row = `<tr>
                            <td>${device.DeviceID}</td>
                            <td>${device.Name}</td>
                            <td>${device.Action}</td>
                            <td>${device.Date}</td>
                        </tr>`;
                tbody.append(row);
            });
        }

        // Function create buttons paginate
        function createPaginationButtons(currentPage, totalPages) {
            const paginationButtons = $('#pagination-buttons');
            paginationButtons.empty(); // clear paginate buttons

            // prev button
            if (currentPage > 1) {
                paginationButtons.append(`<button class="pagination-btn" data-page="${currentPage - 1}"><</button>`);
            }

            // number buttons
            for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
                paginationButtons.append(`<button class="pagination-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`);
            }

            // next button
            if (currentPage < totalPages) {
                paginationButtons.append(`<button class="pagination-btn" data-page="${currentPage + 1}">></button>`);
            }

            // handle event click 
            $('.pagination-btn').click(function () {
                currentPage = parseInt($(this).attr('data-page'));
                displayData(currentPage, data);
                createPaginationButtons(currentPage, totalPages);
                console.log(currentPage);
                populateTableDevices(data, currentPage);
            });
        }

        // Calculate and display paginate buttons
        const totalPages = Math.ceil(data.length / itemsPerPage);
        displayData(currentPage);
        createPaginationButtons(currentPage, totalPages);
    }

    createPaginate(devices);


    // chart
    function createChart() {
        let xValues = totalDevices.map(item => item.Device);
        let yValues = totalDevices.map(item => item.PowerConsumption);

        let barColors = [
            "#b91d47",
            "#00aba9",
            "#2b5797",
            "#e8c3b9"
        ];

        var maintainAspectRatio = window.innerWidth > 414 ? true : false;

        var ctx = $("#myChart");

        var myChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                cutoutPercentage: 50,  // Adjust this value to change the inner cutout size
                title: {
                    display: true,
                    text: "Power Consumption"
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });

        return myChart;
    }
    var chart = createChart();

    $(window).resize(function () {
        chart.destroy();
        chart = createChart();
    });

    // add device
    $('.add-device').on('submit', function (event) {
        event.preventDefault();


        const name = $('input[name="name"]').val().trim();
        const ip = $('input[name="ip"]').val().trim();
        const pwc = $('input[name="pwc"]').val().trim();

        if (name === "") {
            alert("Name is empty");
            $('input[name="name"]').focus()
            return;
        } else if (ip === "") {
            alert("IP is empty");
            $('input[name="ip"]').focus()
            return;
        } else if (pwc === "") {
            alert("Power Consumption is empty");
            $('input[name="pwc"]').focus()
            return;
        }

        // get current date
        let currentDate = new Date();

        let formattedDate = currentDate.getFullYear() + '-' +
            ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' +
            ('0' + currentDate.getDate()).slice(-2);

        totalDevices.push({
            Device: name,
            MACAddress: "",
            IP: ip,
            CreatedDate: formattedDate,
            PowerConsumption: pwc
        })

        chart.destroy();
        chart = createChart();

        populateTableTotalDevices(totalDevices);
        // alert("Added succesfully");

        $('input[name="name"]').val('');
        $('input[name="ip"]').val('');

    });

    // search devices
    $('.search-box').on('submit', function (event) {
        event.preventDefault();

        const name = $('input[name="search"]').val().trim();

        devicesSearch = [];
        count = 0;
        devices.forEach((item) => {
            if (item.Name.toLowerCase().includes(name.toLowerCase())) {
                devicesSearch.push(item);
                count++;
            }
        });

        // if records = 0 => return
        if (count === 0) {
            alert("No records found");
            populateTableDevices(devices, 1);

            createPaginate(devices);
            return;
        }

        // render list 
        populateTableDevices(devicesSearch, 1);

        createPaginate(devicesSearch);

        // reset count
        count = 0;
    });
})

