
getAjaxData(1);
getAjaxData1(1);

function getAjaxData(page) {
	var html = '';
	$.ajax({
		url: "https://reqres.in/api/users?page=" + page,
		method: "GET",
		dataType: 'json',
		data: {},
		success: function (res) {
			console.log(res);

			$('#compact-pagination').pagination({
				pages: res.total_pages,
				cssStyle: 'compact-theme',
				displayedPages: res.per_page,
				currentPage: page,
				onPageClick: changePage1
			});
			for (var i = 0; i < res.data.length; i++) {
				html += `<tr>
							<th scope="row">${res.data[i].id}</th>
							<td>${res.data[i].email}</td>
							<td>${res.data[i].first_name}</td>
							<td>${res.data[i].last_name}</td>
							<td>${res.data[i].avatar}</td>
						</tr>`;
			}
			$('#data1').html(html);
		},
		error: function (err) { console.log(err) },
	});

}

function changePage1(page_index, event) {
	console.log(page_index);
	getAjaxData(page_index);
}


function getAjaxData1(page) {
	var html = '';
	var per_page = 10;
	var offset;
	if (page == 1) {
		offset = 0;
	} else {
		offset = page * per_page;
	}

	$.ajax({
		url: "https://examples.wenzhixin.net.cn/examples/bootstrap_table/data?search=&offset=" + offset + "&limit=" + per_page + "&_=1669884695012",
		method: "GET",
		dataType: 'json',
		data: {},
		success: function (res) {
			console.log(res);
			// 頁籤
			var total_page = res.total % per_page == 0 ? (res.total / per_page) - 1 : Math.ceil(res.total / per_page);
			$('#compact-pagination1').pagination({
				pages: total_page,
				cssStyle: 'compact-theme',
				displayedPages: per_page,
				currentPage: page,
				onPageClick: changePage2
			});
			for (var i = 0; i < res.rows.length; i++) {
				html += `<tr>
							<th scope="row">${res.rows[i].id}</th>
							<td>${res.rows[i].name}</td>
							<td>${res.rows[i].price}</td>
							<td><button style="background-color: gray;">編輯</button>
							<button style="background-color: red;">刪除</button></td>
						</tr>`;
			}
			$('#data2').html(html);
		},
		error: function (err) { console.log(err) },
	});

}
// 頁籤
function changePage2(page_index, event) {
	console.log(page_index);
	getAjaxData1(page_index);
}