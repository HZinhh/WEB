let productData = [
    {
     id: "10001",
     name: "Black Tea Youth Enhancing SET",
     brand: "Innisfree",
     type: "Combo",
     img: "./img/SP/0001.jpg",
     description: `Bộ sản phẩm Black Tea Youth giúp nhanh chóng phục hồi làn da, trả lại vẻ sáng khỏe và tươi tắn cho làn da nhờ hiệu quả dưỡng sáng, cấp nước, cải thiện độ săn chắc, chống oxy hóa và chống lão hóa mạnh mẽ. Hiệu quả ngay sau 1 lần sử dụng đã được kiểm chứng lâm sàng. Set bao gồm 2 sản phẩm fullsize:
     <br>- Tinh chất phục hồi da và chống lão trà đen innisfree Black Tea Youth Enhancing Ampoule 30 mL
     <br>- Kem dưỡng phục hồi da và chống lão hóa trà đen innisfree Black Tea Youth Enhancing Cream 50 mL
     `,
     remain: 50,
     price: 933000,
     status: 1
    },
    {
     id: "10002",
     name: "Innisfree Green Tea Super Skincare SET",
     brand: "Innisfree",
     type: "Combo",
     img: "./img/SP/0002.jpg",
     description: `Tinh chất Green Tea Seed Serum 4.0 với công thức trà xanh cải tiến, tăng cường củng cố hàng rào bảo vệ và dưỡng ẩm chuyên sâu, cho làn da mọng nước chuẩn Hàn. Set bao gồm 2 sản phẩm fullsize:
     <br>- Tinh chất innisfree Green Tea Seed Hyaluronic Serum 2023 Nano 5 loại HA cấp nước tức thì cho da 80mL
     <br>- Kem dưỡng ẩm trà xanh innisfree Green Tea Seed Cream 50 mL
     `,
     remain: 50,
     price: 1500000,
     status: 1
    },
    {
     id: "10003",
     name: "Apple Seed Cleansing Oil & Apple Seed Lip & Eye Makeup Remover",
     brand: "Innisfree",
     type: "Tẩy trang",
     img: "./img/SP/0003.jpg",
     description: `Dầu tẩy trang hạt táo xanh innisfree Apple Seed Lip & Eye Makeup Remover dành riêng cho mắt & môi, nhẹ nhàng làm sạch bụi bẩn và cặn trang điểm lâu trôi. Tẩy trang lành tính với 5 không: <br?
     Không chứa dầu khoáng, không màu tổng hợp, không chế phẩm từ động vật, không chất hoạt động bề mặt có gốc sulfat và không chất tạo mùi hương
     `,
     remain: 0,
     price: 510000,
     status: 1
    },
    {
     id: "10004",
     name: "Green Tea Hydrating Amino Acid Cleansing Oil 150mL",
     brand: "Innisfree",
     type: "Tẩy trang",
     img: "./img/SP/0004.jpg",
     description: "Dầu tẩy trang Innisfree Green Tea Hydrating Amino Acid Cleansing Oil là sản phẩm dầu tẩy trang nhẹ nhàng và hiệu quả giúp làm sạch lớp bụi bẩn, bã nhờn và cặn trang điểm trên da một cách dịu nhẹ, mang lại cho làn da sạch sẽ, mềm mại và ẩm mượt. Dầu tẩy trang Innisfree Green Tea Hydrating Amino Acid Cleansing Oil không chỉ giúp làm sạch sâu và loại bỏ các tạp chất bên trong lỗ chân lông, mà còn giữ cho làn da mềm mại nhờ vào tính chất dịu nhẹ của dầu tẩy trang.Bên cạnh đó, sản phẩm còn chứa chiết xuất từ rễ trà xanh giàu saponin giúp làm sạch tự nhiên, không gây khô da. Đây là thành phần chiết xuất từ thiên nhiên an toàn và lành tính cho da.",
     remain: 50,
     price: 500000,
     status: 1
    },
    {
     id: "10005",
     name: "Apple Seed Lip & Eye Makeup Remover Tissue 30shots",
     brand: "Innisfree",
     type: "Tẩy trang",
     img: "./img/SP/0005.jpg",
     description: "Dầu tẩy trang hạt táo xanh innisfree Apple Seed Lip & Eye Makeup Remover dành riêng cho mắt & môi, nhẹ nhàng làm sạch bụi bẩn và cặn trang điểm lâu trôi. Vừa làm sạch, vừa dưỡng ẩm. Dầu tẩy trang với công thức dịu nhẹ cho mắt, môi giúp loại bỏ lớp trang điểm mắt và môi khó trôi, dầu thừa và làm sạch lỗ chân lông hiệu quả. Sản phẩm vừa làm sạch, vừa giữ ẩm cho da nhờ chiết xuất hạt táo tăng cường độ ẩm và giàu axit béo.",
     remain: 50,
     price: 100000,
     status: 1
    },
    {
     id: "10006",
     name: "Green Tea Hydrating Amino Acid Cleansing Foam 150g",
     brand: "Innisfree",
     type: "Sữa rửa mặt",
     img: "./img/SP/0006.jpg",
     description: `Sữa rửa mặt trà xanh innisfree Green Tea Amino Cleansing Foam làm sạch tạp chất, đồng thời dưỡng ẩm để làn da sạch sẽ, mịn màng. Giàu độ ẩm từ trà xanh dưỡng da Beauty Green Tea<br>
     Sinh ra dành riêng cho làn da, Beauty Green Tea được chọn lọc từ hơn 2,401 giống trà xanh Hàn Quốc. Thành phần dưỡng ẩm chuyên biệt này chứa 16 loại amino acid khác nhau, đậm đặc gấp 3.5 lần so với trà xanh thông thường. Đặc biệt, nước trà xanh tươi Green Tea Water 2.0™ được cải tiến nhờ công nghệ Dual-Moisture-Rising™ để lưu giữ dưỡng chất trọn vẹn.`,
     remain: 50,
     price: 260000,
     status: 1
    },
    {
     id: "10007",
     name: "Green Tea Foam Cleanser 150mL",
     brand: "Innisfree",
     type: "Sữa rửa mặt",
     img: "./img/SP/0007.jpg",
     description: "Sữa rửa mặt trà xanh innisfree Green Tea Amino Cleansing Foam làm sạch tạp chất, đồng thời dưỡng ẩm để làn da sạch sẽ, mịn màng.",
     remain: 0,
     price: 260000,
     status: 1
    },
    {
     id: "10008",
     name: "Green Tea Balancing Skin EX (Toner)",
     brand: "Innisfree",
     type: "Toner",
     img: "./img/SP/0008.jpg",
     description: "Nước Hoa Hồng Innisfree Green Tea Balancing Skin Ex 200ml chứa chiết xuất từ lá trà xanh tươi nguyên chất trồng trên đảo Jeju chứa nhiều acid amin có tác dụng cân bằng độ pH trên da, se khít lỗ chân lông, loại bỏ những bã nhờn và bụi bẩn có bên trong da. Sản phẩm có kết cấu lỏng nhưng đặc hơn một chút so với nước, dễ dàng hấp thụ nhanh qua da, sản phẩm cũng không chứa cồn nên những bạn dù bị mụn khi sử dụng cũng không gây rát da.",
     remain: 50,
     price: 345000,
     status: 1
    },
    {
     id: "10009",
     name: "Green Tea Fresh Skin Innisfree (Toner)",
     brand: "Innisfree",
     type: "Toner",
     img: "./img/SP/0009.jpg",
     description: "Đây là sản phẩm thuộc dòng Fresh Skin (dành cho da dầu) của Innisfree, cải tiến hơn nước hoa hồng phiên bản cũ ở độ thấm rút cực nhanh cho làn da dầu. Nước hoa hồng của Green Tea Innisfree, ngoài tác động làm sạch da như những loại nước hoa hồng thông thường khác, thì chúng đặc biệt nổi trội ở khoản hỗ trợ se khít lỗ chân lông, và khả năng làm mềm da sau đó, chứ không hẳn chỉ là cảm giác khô ráo như các loại nước hoa hồng khác mang lại.",
     remain: 50,
     price: 322000,
     status: 1
    },
    {
     id: "10010",
     name: "Canola Honey Deep-Moisture",
     brand: "Innisfree",
     type: "Son môi",
     img: "./img/SP/0010.jpg",
     description: "Son dưỡng ẩm sâu không màu. Innisfree Canola Honey Lip Balm Deep Moisture 3.5g. Son dưỡng ẩm sâu không màu Innisfree Canola Honey Lip Balm Deep Moisture chiết xuất từ mật ong hoa cải giúp dưỡng ẩm sâu, tăng độ đàn hồi và hình thành màng chắn bảo vệ đôi môi.",
     remain: 0,
     price: 130000,
     status: 1
    },
    {
     id: "10011",
     name: "Green Tea Lip",
     brand: "Innisfree",
     type: "Son môi",
     img: "./img/SP/0011.jpg",
     description: "Son dưỡng Innisfree Green Tea Lip chứa 99.9% thành phần được chiết xuất từ thiên nhiên, tiêu biểu chính là chiết xuất từ Trà Xanh giúp dưỡng ẩm cao, kháng khuẩn, bảo vệ da khỏi các tác hại của môi trường sống xung quanh, giảm thâm môi, tăng cường độ đàn hồi của môi, mang lại cho bạn đôi môi căng mướt, loại bỏ tình trạng môi khô, nứt nẻ hay bong tróc.",
     remain: 50,
     price: 140000,
     status: 1
    },
    {
     id: "10012",
     name: "Real Peppermint Mask (Mặt nạ Bạc hà Innisfree)",
     brand: "Innisfree",
     type: "Mặt nạ",
     img: "./img/SP/0012.jpg",
     description: "Tinh chất bạc hà tươi mát sẽ mang đến cho bạn một trải nghiệm hoàn toàn mới với dòng mặt nạ bạc hà đến từ Innisfree. Sản phẩm mang đậm phong cách của Innisfree với thiết kế thân thiện với môi trường, thành phần chiết xuất hoàn toàn từ lá bạc hà được trồng trên đảo Jeju thần thánh và được hứa hẹn sẽ là một best seller mới của hãng.",
     remain: 50,
     price: 240000,
     status: 1
    },
    {
     id: "10013",
     name: "Real Rose Mask (Mặt nạ chiếc xuất Hoa hồng Innisfree)",
     brand: "Innisfree",
     type: "Mặt nạ",
     img: "./img/SP/0013.jpg",
     description: "Mặt nạ tinh chất hoa hồng Innisfree Rose My Real Squeeze Mask là mặt nạ được chiết xuất từ hoa hồng thiên nhiên có tác dụng giúp cung cấp ẩm cho làn da mịn màng, căng da và chống lại sự lão hóa của da.",
     remain: 50,
     price: 240000,
     status: 1
    },
    {
     id: "10014",
     name: "Tone Up No Sebum Sunscreen EX SPF 50+ PA++++ 50mL",
     brand: "Innisfree",
     type: "Kem chống nắng",
     img: "./img/SP/0014.jpg",
     description: "Kem chống nắng innisfree Tone Up No Sebum Sunscreen EX SPF 50+ PA++++ với màng lọc chống nắng vật lý, giúp bảo vệ da tối ưu, đồng thời mang lại hiệu quả nâng tông, kiềm dầu vượt trội, duy trì làn da hồng hào, mịn mượt suốt 24 giờ.",
     remain: 0,
     price: 330000,
     status: 1
    },
    {
     id: "10015",
     name: "Intensive Triple-shield Sunscreen SPF50+ PA++++ 50mL",
     brand: "Innisfree",
     type: "Kem chống nắng",
     img: "./img/SP/0015.jpg",
     description: "Kem Chống Nắng Lâu Trôi, Nâng Tông Da Innisfree Intensive Triple-Shield Sunscreen là kem chống nắng thuộc thương hiệu Innisfree phiên bản upgrade của dòng Triple Care (kem chống nắng best seller của hãng) với nhiều cải tiến ngoài việc bảo vệ da mạnh mẽ dưới tác động của ánh nắng mặt trời, nâng tông da. Ngoài ra còn có khả năng chống ánh sáng xanh từ màn hình của thiết bị điện tử và thân thiện với rạn san hô.",
     remain: 50,
     price: 360000,
     status: 1
    },
    {
     id: "10016",
     name: "Son Kem Lì Innisfree Real Fit Matte Liquid",
     brand: "Maybefree",
     type: "Son môi",
     img: "./img/SP/0016.jpg",
     description: "Innisfree Real Fit Matte Liquid là dòng son kem lì dạng lỏng, nó là sự kết hợp đặc sắc giữa son lì và son bóng. Innisfree Real Fit Matte Liquid có chất son lên môi rất mịn, cực mượt và mềm, không hề gây bí hay nặng môi, đặc biệt màu son giữ được khá lâu trên môi. Son có chứa dưỡng chất dưỡng ẩm cho môi nên không hề gây khô môi hay bợn màu.",
     remain: 50,price: 190000,
     status: 1
    },
    {
     id: "10017",
     name: "Son Lì Innisfree Real Fit Matte Lipstick 3.6gr",
     brand: "Maybefree",
     type: "Son môi",
     img: "./img/SP/0017.jpg",
     description: `Innisfree Real Fit Matte Lipstick là bộ sưu tập son 10 shape với các màu chủ đạo thiên về tông cam, hồng, đỏ,… với khả năng “mix & match” tinh tế, tạo ra những sắc son rạng rỡ, đánh bật tông da, giúp bạn trở nên nổi bật, quyến rũ.`,
     remain: 50,price: 230000,
     status: 1
    },
    {
     id: "10018",
     name: "Hộp mặt nạ tinh chất dưỡng ẩm cao cấp (5 miếng)",
     brand: "Hadalabo",
     type: "Mặt nạ",
     img: "./img/SP/0018.jpg",
     description: "Cung cấp dưỡng chất dưỡng ẩm gấp 30 lần tinh chất dưỡng thông thường chỉ sau 1 lần sử dụng.",
     remain: 0,
     price: 195000,
     status: 1
    },
    {
     id: "10019",
     name: "Sữa rửa mặt dưỡng ẩm cao cấp",
     brand: "Hadalabo",
     type: "Sữa rửa mặt",
     img: "./img/SP/0019.jpg",
     description: `Sạch sâu, không khô da ngay sau 1 lần rửa
     <br>• Hệ 5 loại AHA chiết xuất từ các loại trái cây giàu acid Việt Quất (Acid Latic), Mía Đường (Acid Glycolic), Chanh và Cam (Acid Citric), Phong đường (Acid Malic và Acid Tataric).
     <br>• Hệ dưỡng ẩm sâu 6 loại HA, gồm Nano HA với phân tử cực nhỏ và HA lên men Fermented HA giúp duy trì độ ẩm, dưỡng da ẩm mịn, căng mượt.
     <br>• Amino Acid và Fruits Enzyme giúp nhân đôi khả năng làm sạch.
     <br>• Công nghệ Max Intensifier từ Nhật Bản giúp đưa các dưỡng chất thấm sâu vào lớp biểu bì gấp 2 lần, tăng cường hiệu quả dưỡng ẩm
     `,
     remain: 50,
     price: 125000,
     status: 1
    },
    {
     id: "10020",
     name: "Dung dịch dưỡng ẩm (Da dầu)",
     brand: "Hadalabo",
     type: "Lotion",
     img: "./img/SP/0020.jpg",
     description: "Cấp ẩm chuyên sâu suốt 36 giờ, dưỡng da căng mịn, sáng khỏe.",
     remain: 0,
     price: 190000,
     status: 1
    },
    {
     id: "10021",
     name: "Kem dưỡng ẩm",
     brand: "Hadalabo",
     type: "Kem dưỡng",
     img: "./img/SP/0021.jpg",
     description: "Tăng cường độ ẩm gấp 2 lần, dưỡng da căng mịn, sáng khỏe.",
     remain: 0,
     price: 200000,
     status: 1
    },
    {
     id: "10022",
     name: "Dung dịch dưỡng ẩm (Da thường, Da khô)",
     brand: "Hadalabo",
     type: "Lotion",
     img: "./img/SP/0022.jpg",
     description: "Cấp ẩm chuyên sâu suốt 36 giờ, dưỡng da căng mịn, sáng khỏe.",
     remain: 0,
     price: 190000,
     status: 1
    },
    {
     id: "10023",
     name: "Sữa dưỡng trắng",
     brand: "Hadalabo",
     type: "Sữa dưỡng trắng",
     img: "./img/SP/0023.jpg",
     description: "Sữa Dưỡng Trắng Da Hada Labo Perfect White Arbutin Milk là dòng sữa dưỡng thuộc thương hiệu Hadalabo. Với công thức kết hợp giữa thành phần Arbutin tinh khiết và Hyaluronic Acid nuôi dưỡng làn da trắng sáng vượt trội kết hợp cấp ẩm sâu, mang lại làn da sáng mịn đều màu và ẩm mượt dài lâu",
     remain: 50,
     price: 200000,
     status: 1
    },
    {
     id: "10024",
     name: "GEL chống nắng, dưỡng ẩm",
     brand: "Hadalabo",
     type: "Gel dưỡng ẩm",
     img: "./img/SP/0024.jpg",
     description: "GEL dưỡng ẩm chống nắng 5-in-1 có khả năng thay thế chức năng của lotion dưỡng, tinh chất dưỡng, kem dưỡng, kem lót và kem chống nắng.",
     remain: 50,
     price: 280000,
     status: 1
    },
    {
     id: "10025",
     name: "Nước tẩy trang sạch sâu, dưỡng trắng",
     brand: "Hadalabo",
     type: "Tẩy trang",
     img: "./img/SP/0025.jpg",
     description: "Sạch sâu 99% lớp trang điểm lâu trôi, kem chống nắng, bụi mịn PM2.5 và dưỡng trắng.",
     remain: 50,
     price: 180000,
     status: 1
    },
    {
     id: "10026",
     name: "Fit Me Foundation",
     brand: "Maybelline",
     type: "Kem nền",
     img: "./img/SP/0026.jpg",
     description: `Kem nền "quốc dân" với khả năng kiềm dầu hoàn hảo và để lại lớp nền mịn nhẹ.`,
     remain: 50,
     price: 280000,
     status: 1
    },
    {
     id: "10027",
     name: "SuperStay Full Coverage Foudation",
     brand: "Maybelline",
     type: "Kem nền",
     img: "./img/SP/0027.jpg",
     description: "Kem Nền Che Phủ Hoàn Hảo, Bền Màu Lâu Trôi Maybelline Super Stay Full Coverage Foundation là kem nền của thương hiệu Maybelline. Kem nền với hạt phấn mịn lì trên da cho lớp nền mịn màng, lâu trôi, che khuyết điểm suốt cả ngày cùng tông màu tiệp da tự nhiên phù hợp với làn da châu Á, cho lớp nền hoàn hảo năng động suốt cả ngày.",
     remain: 50,
     price: 273000,
     status: 1
    },
    {
     id: "10028",
     name: "Phấn Phủ Nén Maybelline FIT ME Matte Poreless",
     brand: "Maybelline",
     type: "Phấn phủ",
     img: "./img/SP/0028.jpg",
     description: "Phấn Nền Dạng Nén Che Phủ Hoàn Hảo, Kiềm Dầu Hiệu Quả Maybelline Fit Me Matte Poreless Powder SPF32 /PA+++ là phấn nền đến từ thương hiệu Maybelline công thức chứa hạt phấn Micro Power cho lớp nền mịn, kiềm dầu lên đến 16h, mang đến cho bạn một lớp nền hoàn hảo, phủ mịn và không bị bóng dầu.",
     remain: 0,
     price: 220000,
     status: 1
    },
    {
     id: "10029",
     name: "Phấn Phủ Kiềm Dầu Maybelline Fit Me Loose",
     brand: "Maybelline",
     type: "Phấn phủ",
     img: "./img/SP/0029.jpg",
     description: "Phấn Nén Mịn Lì Kiềm Dầu Maybelline Fit Me Matte + Poreless Powder Oil Control SPF 32 PA+++ là một trong những loại phấn nén có khả năng che phủ, kiềm dầu đồng thời còn chứa các dưỡng chất giúp giữ ẩm cho da và giúp da trở nên sáng mịn.",
     remain: 50,
     price: 200000,
     status: 1
    },
    {
     id: "10030",
     name: "Phấn Nước Dream Fresh Face Liquid Foundation",
     brand: "Maybelline",
     type: "Cushion",
     img: "./img/SP/0030.jpg",
     description: `Phấn nước Maybelline Dream Cushion Fresh Face Liquid Foundation 14.6g từ thương hiệu Maybelline của Mỹ đã có mặt tại hệ thống mỹ phẩm chính hãng Beauty Garden. Sản phẩm cushion với khả năng che phủ tốt kết hợp tinh chất dưỡng ẩm được tăng cường đem lại cho bạn lớp nền trong mượt vô cùng tự nhiên. Đặc biệt, Maybelline đã áp dụng công thức “bắt sáng” xuất chúng để làn da bạn luôn lung linh dưới mọi góc độ.`,
     remain: 50,
     price: 160000,
     status: 1
    },
    {
     id: "10031",
     name: "Maybelline Super BB Cushion Fresh Matte",
     brand: "Maybelline",
     type: "Cushion",
     img: "./img/SP/0031.jpg",
     description: "Được nghiên cứu và phát triển theo công thức độc đáo, Phấn Nước Cho Da Dầu - Maybeline Super BB Cushion Fresh Matte SPF 25/PA+ che khuyết điểm hoàn hảo, cho lớp nền trong mượt mịn màng mà không nhờn rít suốt 12 giờ. Sản phẩm có công thức dịu nhẹ, phù hợp với mọi loại da, mang đến cho bạn lớp trang điểm nền hoàn hảo.",
     remain: 50,
     price: 300000,
     status: 1
    },
    {
     id: "10032",
     name: "Phấn Má Hồng Maybelline Fit Me Blush 4.5gr",
     brand: "Maybelline",
     type: "Phấn má hồng",
     img: "./img/SP/0032.jpg",
     description: "Phấn Má Hồng Mịn Da Maybelline Fit Me Blush là bộ sản phẩm phấn má hồng mịn da với màu sắc nhẹ nhàng trẻ trung và có tác dụng kiềm dầu, giữ cho khuôn mặt của bạn khô thoáng, ko bị bóng nhờn. Hộp phấn có thiết kế bắt mắt và màu sắc xinh tươi, là sản phẩm má hồng được ưa chuộng của nhiều bạn gái, mang đến gương mặt tươi tắn tự nhiên mỗi ngày.",
     remain: 50,
     price: 150000,
     status: 1
    },
    {
     id: "10033",
     name: "Che Khuyết Điểm Maybelline Face Studio Master",
     brand: "Maybelline",
     type: "Che khuyết điểm",
     img: "./img/SP/0033.jpg",
     description: "Trong khi các loại kem che khuyết điểm màu khác đều khá khó khăn để bạn có thể bắt đầu sử dụng, thì với bảng màu Face Studio Master Camo Color Correcting Kit này, các bạn có thể thực hiện đơn giản hơn với việc che phủ đi các nốt mụn, thâm hay tàn nhang đáng ghét nhé!",
     remain: 0,
     price: 150000,
     status: 1
    },
    {
     id: "10034",
     name: "Bút Che Khuyết Điểm Maybelline Instant Age",
     brand: "Maybelline",
     type: "Che khuyết điểm",
     img: "./img/SP/0034.jpg",
     description: "Bút cushion che khuyết điểm Instant Age giúp che phủ hoàn hảo các loại khuyết điểm và giúp giảm bọng mắt, quầng thâm. Có đến 5 màu phù hợp mọi tông da và undertone.",
     remain: 50,
     price: 230000,
     status: 1
    },
    {
     id: "10035",
     name: "Phấn Mắt Maybelline The Blushed Nudes Palette",
     brand: "Maybelline",
     type: "Phấn mắt",
     img: "./img/SP/0035.jpg",
     description: "Thiết kế của Bảng Màu Mắt Tông Hồng Nude The Blushed Nudes Maybelline góc cạnh với chất liệu nhựa phun sơn nhũ cứng cáp cho cảm giác cầm chắc tay. Sản phẩm còn kèm theo gương trang điểm và 2 cây cọ 2 đầu chuyên dụng để đánh phấn mắt, thuận tiện cho các cô nàng khi đi du lịch.",
     remain: 50,
     price: 314000,
     status: 1
    },
    {
     id: "10036",
     name: "Phấn Mắt The 24K Nude Eyeshadow Palette",
     brand: "Maybelline",
     type: "Phấn mắt",
     img: "./img/SP/0036.jpg",
     description: "Phấn mắt Maybelline The 24K Nudes Palette là một hộp phấn mắt với 12 màu. Thiết kế đơn giản, nhìn vào là thấy màu mắt bên trong dễ dàng. Nếu bạn là tuýp người không mấy trang điểm và đang loay hoay không biết sử dụng phối màu như thế nào thì cứ yên tâm Maybelline cực hiểu tâm lý bạn gái và có cả cách hướng dẫn phối màu (được đánh số và hình minh họa) cực dễ hiểu phía sau hộp, bên trong kèm 1 cọ mút 2 đầu.",
     remain: 50,
     price: 250000,
     status: 1
    },
    {
     id: "10037",
     name: "Bút Kẻ Mắt Nước Maybelline Hyper Ink 1.5g",
     brand: "Maybelline",
     type: "Eyeliner",
     img: "./img/SP/0037.jpg",
     description: "Bút Kẻ Mắt Nước Maybelline Hyper Ink với công thức cải tiến sở hữu đầu cọ bút dạ – cushion chắc chắn, sẽ giúp bạn có đôi mắt quyến rũ hơn. Công nghệ film hút sáng cho màu mực đen đậm cá tính x10 lần. Kẻ mắt nước Maybelline Hyper Ink không lem, không trôi suốt 24 giờ nhưng lại hoàn toàn dễ tẩy trang.",
     remain: 50,
     price: 170000,
     status: 1
    },
    {
     id: "10038",
     name: "Mascara Maybelline Lash Sensational",
     brand: "Maybelline",
     type: "Mascara",
     img: "./img/SP/0038.jpg",
     description: "Mascara Làm Tơi Mi, Nâng Mi Maybelline Lash Sensational Waterproof là mascara đến từ thương hiệu Maybelline với đầu cọ lược độc đáo chứa 6 loại lược khác nhau và 10 lớp lược giúp từng lớp mi dù nhỏ và ngắn vẫn được chải đều và tơi mi, nâng mi hiệu quả cho bạn đôi hàng mi xinh đẹp và đôi mắt trở nên thu hút, quyến rũ hơn.",
     remain: 50,
     price: 180000,
     status: 1
    },
    {
     id: "10039",
     name: "Bảng Màu Kẻ Mày Và Tạo Sống Mũi Fashion Brow",
     brand: "Maybelline",
     type: "Kẻ mày, Tạo khối",
     img: "./img/SP/0039.jpg",
     description: "Bảng Màu Kẻ Mày Và Tạo Sống Mũi 3D Chuyên Nghiệp Maybelline Fashion Brow 3D Brow & Nose Palette 3g là sản phẩm của thương hiệu Maybelline của Mỹ với 3 kết cấu (gel wax sáp – bột màu) cho 3 công dụng khác nhau. Sản phẩm kẻ mày được làm từ thành phần lành tính, thân thiện với mọi làn da và mang lại cho bạn gương mặt thanh thoát và sắc sảo hơn.",
     remain: 50,
     price: 230000,
     status: 1
    },
    {
     id: "10040",
     name: "Chì Kẻ Chân Mày 2 Đầu Maybelline Màu Xám 0.5g",
     brand: "Maybelline",
     type: "Kẻ mày",
     img: "./img/SP/0040.jpg",
     description: "Để giúp các nàng dễ dàng có được hàng chân mày đẹp chỉ trong vài bước đơn giản, Hasaki xin giới thiệu sản phẩm Chì Kẻ Chân Mày 2 Đầu Maybelline Natural Brow Duo đến từ thương hiệu mỹ phẩm trang điểm nổi tiếng Maybelline. Đây là chì kẻ mày có thiết kế 2 đầu độc đáo: đầu chì dạng vặn sắc sảo giúp định dạng và tạo nét chân mày tinh tế, đầu cọ bột với công thức chứa silicon & khoáng chất giúp tán đều cho nét mày đầy đặn, tự nhiên, mềm mại và giữ màu lâu trôi suốt 12 giờ. Sản phẩm thích hợp cho cả những bạn nữ đang trong quá trình “tập tành” trang điểm, giúp mang lại nét mày hoàn hảo một cách dễ dàng nhất. ",
     remain: 0,
     price: 180000,
     status: 1
    },
    {
     id: "10041",
     name: "Son Kem Lì Maybelline Super Stay Matte Ink",
     brand: "Maybelline",
     type: "Son môi",
     img: "./img/SP/0041.jpg",
     description: "Son Kem Lì 16H Lâu Trôi SuperStay Matte Ink™ nổi tiếng với công nghệ mực đàn hồi độc quyền giúp son lên màu chuẩn, lâu trôi 16h, không lem, dính và không gây khô môi, giúp bạn ăn uống, hoạt động thả ga cả ngày dài mà không lo lem, dính trên thành ly, đồ ăn hay quần áo.",
     remain: 50,
     price: 210000,
     status: 1
    },
    {
     id: "10042",
     name: "Son Tint Maybelline Color Sensational Lip Tint",
     brand: "Maybelline",
     type: "Son môi",
     img: "./img/SP/0042.jpg",
     description: "Son tint nhẹ môi Color Sensational Lip Tint với 8 màu thời thượng lấy cảm hứng từ thành phố New York, tôn lên vẻ đẹp của tông da châu Á. Son lên chuẩn màu chỉ sau một lần lướt, để lại hiệu ứng lì và cảm giác siêu nhẹ trên môi. Chất son mềm mịn, dễ tán, có thể sử dụng như son môi, phấn má và mắt dạng kem giúp bạn trang điểm dễ dàng bằng một cây son.",
     remain: 50,
     price: 170000,
     status: 1
    },
    {
     id: "10043",
     name: "Son Lì Maybelline Lips Vivid Matte 3.9gr",
     brand: "Maybelline",
     type: "Son môi",
     img: "./img/SP/0043.jpg",
     description: "Son màu lâu phai Vivid Maybelline với tinh chất mật ong dưỡng chất làm cho môi trở nên đàn hồi và mềm mại, mang đến bờ môi ẩm mượt suốt ngày dài. Với sắc tố màu nguyên chất giúp cho màu son lên màu chuẩn, bao phủ tuyệt vời, giữ màu trong suốt 6 giờ.",
     remain: 50,
     price: 190000,
     status: 1
    },
    {
     id: "10044",
     name: "Son Lì Maybelline The Loaded Bolds Matte Lips",
     brand: "Maybelline",
     type: "Son môi",
     img: "./img/SP/0044.jpg",
     description: "Maybelline là thương hiệu mỹ phẩm quá quen thuộc với chị em phụ nữ yêu thích làm đẹp. Bên cạnh các dòng mascara từng gây sốt, các dòng son Maybelline cũng được các cô nàng yêu thích không kém, đặc biệt là dòng Creamy Matte đã ra mắt cách đây 1 năm. Mùa hè năm nay, hãng vừa cho ra đời dòng son Maybelline The Loaded Bold, đúng như tên gọi, chính các gam màu đậm mới là điều khiến phái đẹp chú ý nhất.",
     remain: 50,
     price: 190000,
     status: 1
    },
    {
     id: "10045",
     name: "Nước Tẩy Trang Maybelline Micellar Water 400ml",
     brand: "Maybelline",
     type: "Tẩy trang",
     img: "./img/SP/0045.jpg",
     description: "Nước tẩy trang là sản phẩm không thể thiếu và luôn là người bạn đồng hành cho những cô nàng thường xuyên trang điểm. Nước Tẩy Trang 4 Trong 1 Không Cồn Cho Mọi Loại Da Maybelline 4-in-1 Micellar Water với công nghệ tiên tiến được áp dụng từ Maybelline New York, công dụng 4in1 giúp đơn giản hóa trong chu trình tẩy trang của bạn, giúp loại bỏ nhanh chóng lớp trang điểm và làm sạch da một cách dễ dàng chỉ trong 1 bước sử dụng, không gây cảm giác nhờn rít, đồng thời cung cấp độ ẩm giúp làn da trở nên ẩm mượt, mịn màng và sạch hoàn toàn. Sản phẩm an toàn tuyệt đối cho da của bạn ngay cả với làn da nhạy cảm. Sản phẩm tẩy trang được khuyến khích sử dụng trong quy trình chăm sóc da hoàn chỉnh, để mang lại hiệu quả tốt nhất. Và chắc chắn là sản phẩm tẩy trang của nhiều cô gái tin dùng.",
     remain: 50,
     price: 190000,
     status: 1
    },
    {
        id: "10046",
        name: "Bảng phấn mắt Perfect Diary 12 màu sắc hiệu ứng ánh nhũ lấp lánh 14g",
        brand: "Perfect Diary",
        type: "Phấn mắt",
        description: "Bảng phấn mắt Perfect Diary với 12 màu sắc hiệu ứng ánh nhũ lấp lánh sẽ giúp tạo ra nhiều kiểu trang điểm khác nhau, từ nhẹ nhàng đến sắc nét và cá tính. Với công thức mịn màng và bám dính tốt, bảng phấn mắt Perfect Diary sẽ giúp giữ màu lâu và không lem bởi mồ hôi hay nước. Sản phẩm có thiết kế nhỏ gọn và tiện lợi để bạn mang theo bên mình, phù hợp cho cả những chuyến đi xa hay đi làm.",
        img: "./img/SP/0046.jpeg",
        price: 469000,
        remain: 0,
        status: 1
    },
    {
        id: "10047",
        name: "Son bóng ReadMe Rippled Lip Gloss High Shine Finish Perfect Diary 6 màu 4g",
        brand: "Perfect Diary",
        type: "Son môi",
        description: "Son bóng ReadMe Rippled Lip Gloss High Shine Finish của Perfect Diary là sự lựa chọn tuyệt vời cho những ai muốn sở hữu làn môi căng bóng và quyến rũ. Với 6 màu sắc tùy chọn, sản phẩm này sẽ tạo ra hiệu ứng sáng bóng và làm cho đôi môi trông thêm đầy sức sống. Ngoài ra, sản phẩm còn giúp dưỡng ẩm và nuôi dưỡng cho làn môi mềm mịn hơn, không bị khô hay nứt nẻ.",
        img: "./img/SP/0047.jpeg",
        price: 279000,
        remain: 50,
        status: 1
    },
    {
        id: "10048",
        name: "Hộp 4 thỏi son kem Perfect Diary xinh xắn làm quà tặng cho bạn gái",
        brand: "Perfect Diary",
        type: "Son môi",
        description: "Hộp quà Perfect Diary với 4 thỏi son kem đa dạng màu sắc sẽ là món quà tuyệt vời dành cho bạn gái của bạn. Bên cạnh việc làm đẹp cho đôi môi, sản phẩm còn được thiết kế với kiểu dáng xinh xắn, gọn nhẹ và tiện lợi để mang theo bên mình khi đi ra ngoài.",
        img: "./img/SP/0048.jpeg",
        price: 999000,
        remain: 1,
        status: 1
    },
    {
        id: "10049",
        name: "Bộ Son môi nhung lì độ lên màu cao và Bảng phấn mắt có sắc tố cao Perfect Diary",
        brand: "Perfect Diary",
        type: "Combo",
        description: "Bộ Son môi nhung lì, độ lên màu cao, phiên bản mùa đông và Bảng phấn mắt có sắc tố cao Perfect Diary là lựa chọn hoàn hảo để tạo ra vẻ đẹp tự nhiên và quyến rũ. Với son môi lì độ cao và bảng phấn mắt với sắc tố cao, sản phẩm sẽ giúp bạn tạo ra những trang điểm đầy sáng tạo và ấn tượng.",
        img: "./img/SP/0049.jpeg",
        price: 730000,
        remain: 50,
        status: 1
    },
    {
        id: "10050",
        name: "Sữa Chống Nắng La Roche-Posay Bảo Vệ Da Tối Ưu SPF50+ 50ml Anthelios UVMune 400 Fluide Invisible Fluid SPF50+",
        brand: "La Roche-Posay",
        type: "Kem chống nắng",
        description: "Sữa Chống Nắng La Roche-Posay Anthelios UVMune 400 Fluide Invisible Fluid SPF50+ là phiên bản cải tiến của Anthelios Invisible Fluid – dòng sản phẩm chống nắng rất được yêu thích và được đánh giá cao từ thương hiệu dược mỹ phẩm La Roche-Posay. Sản phẩm cung cấp khả năng bảo vệ da vượt trội khỏi tia UVB & UVA dài – ngay cả các tia ở bước sóng 380 – 400 NM – thủ phạm tiềm ẩn hình thành các gốc thâm nám nằm sâu dưới da.",
        img: "./img/SP/0050.jpg",
        price: 390000,
        remain: 50,
        status: 1
    },
    {
        id: "10051",
        name: "Kem Dưỡng La Roche-Posay Giúp Phục Hồi Da Đa Công Dụng 40ml Cicaplast Baume B5+ Ultra-Repairing Soothing Balm",
        brand: "La Roche-Posay",
        type: "Kem dưỡng",
        description: "Kem Dưỡng Giúp Phục Hồi Da Đa Công Dụng La Roche-Posay Cicaplast Baume B5+ Combo Kem Dưỡng Cicaplast Baume B5+ Ultra-Repairing Soothing Balm 40ml + Xịt Khoáng Thermal Spring Water 50ml",
        img: "./img/SP/0051.jpg",
        price: 280000,
        remain: 0,
        status: 1
    },
    {
        id: "10052",
        name: "Chì Kẻ Mắt Dạng Sáp Nét Mảnh, Lâu Trôi Romand Han All Shade Liner 0.09g",
        brand: "Romand",
        type: "Kẻ mày",
        description: "Chì Kẻ Mắt Dạng Sáp Nét Mảnh, Lâu Trôi Romand Han All Shade Liner là chì kẻ mắt đến từ thương hiệu Romand giúp tạo đường viền mắt sắc sảo, chì kẻ có nét vẽ thanh mảnh cùng bảng màu tự nhiên và là bước trang điểm cần thiết cho bạn để sở hữu đôi mắt long lanh tự nhiên không kém phần thu hút. ",
        img: "./img/SP/0052.jpg",
        price: 129000,
        remain: 50,
        status: 1
    },
    {
        id: "10053",
        name: "Son Kem Lì, Mịn Mượt Như Nhung Romand Milk Tea Velvet Tint 4.4g",
        brand: "Romand",
        type: "Son môi",
        description: "Son Kem Lì Romand Milk Tea Velvet Tint  là son kem lì của thương hiệu Romand có chất son xốp mịn, độ lên màu chuẩn, dễ tán đều trên môi cùng bảng màu ngọt ngào, mùi thơm dịu nhẹ tựa ly trà sữa hương socola ngọt ngào, êm dịu cho bạn đôi môi ngọt ngào, xinh xắn thu hút mọi ánh nhìn.",
        img: "./img/SP/0053.jpg",
        price: 139000,
        remain: 50,
        status: 1
    },
    {
        id: "10054",
        name: "Romand Bare Water Cushion HCT",
        brand: "Romand",
        type: "Cushion",
        description: "Phấn Nước Trang Điểm Che Phủ Tự Nhiên, Dưỡng Ẩm Cho Da Căng Bóng Romand Bare Water Cushion là phấn nước trang điểm đến từ thương hiệu Romand có kết cấu chất phấn mỏng nhẹ tự nhiên, khả năng che phủ hoàn hảo cho làn da ẩm mượt, căng bóng, duy trì lớp nền rạng rỡ suốt cả ngày dài.",
        img: "./img/SP/0054.jpg",
        price: 159000,
        remain: 0,
        status: 1
    },
    {
        id: "10055",
        name: "Bảng Phấn Mắt 6 Ô Siêu Xinh Bbia Ready To Wear Eye Palette 5g",
        brand: "BBIA",
        type: "Phấn mắt",
        description: "Bảng Phấn Mắt 6 Ô Siêu Xinh Bbia Ready To Wear Eye Palette là phấn mắt của thương hiệu Bbia với thiết kế bảng màu 6 ô xinh xắn, chất phấn mướt mịn, độ lên màu và bám màu tốt giúp cho bạn sở hữu đôi mắt long lanh cùng nhũ lấp lánh cực kỳ cuốn hút.",
        img: "./img/SP/0055.jpg",
        price: 259000,
        remain: 50,
        status: 1
    },
    {
        id: "10056",
        name: "Bảng Phấn Mắt 9 Ô Xinh Xắn Black Rouge Colordation Mood Palette",
        brand: "Black Rouge",
        type: "Phấn mắt",
        description: "Bảng Phấn Mắt 9 Ô Xinh Xắn Black Rouge Colordation Mood Palette là phấn mắt thuộc thương hiệu Black Rouge với thiết kế 9 ô màu xinh xắn, bảng màu trendy với đủ cấp độ và phân cấp rõ ràng: 3 cấp Light – Point – Deep cho bạn thỏa sức sáng tạo phong cách makeup khác nhau. Bảng màu với kết cấu mềm mịn, bền màu giúp giữ đôi mắt luôn lung linh, cuốn hút mọi ánh nhìn. ",
        img: "./img/SP/0056.jpg",
        price: 409000,
        remain: 50,
        status: 1
    },
    {
        id: "10057",
        name: "Bút Kẻ Mắt Nước Chống Trôi Black Rouge Power Proof Pen Liner 0.5g",
        brand: "Black Rouge",
        type: "Eyeliner",
        description: `Bút Kẻ Mắt Nước Chống Trôi Black Rouge Power Proof Pen Liner là bút  kẻ mắt nước đến từ thương hiệu Black Rouge vừa cho ra mắt bộ siêu tập Pool Party. Trong đó "Power Proof Pen Liner" là dòng kẻ mắt nằm trong bộ sưu tập lần này của Black Rouge với đường kẻ cực kì sắc nét & khó lem, lên màu rõ ngay lần di bút đầu tiên.`,
        img: "./img/SP/0057.webp",
        price: 149000,
        remain: 50,
        status: 1
    },
    {
        id: "10058",
        name: "Phấn Nước Che Phủ Cao, Lâu Trôi Merzy The First Cushion Cover SPF50+/PA+++ 13g",
        brand: "Merzy",
        type: "Cushion",
        description: "Phấn Nước Che Phủ Cao, Lâu Trôi Merzy The First Cushion Cover là dòng phấn nước trang điểm thuộc thương hiệu Merzy với chất mịn siêu nhẹ cho lớp nền lâu trôi nhưng không hề nặng da, che phủ từ những khuyết điểm nhỏ đến những điểm xỉn màu trên da, cấp ẩm giữ da luôn ẩm mịn cùng với chỉ số chống nắng SPF50+/PA+++ giúp bảo vệ da hiệu quả dưới tác hại của tia UV ",
        img: "./img/SP/0058.jpg",
        price: 232000,
        remain: 0,
        status: 1
    },
    {
        id: "10059",
        name: "Bút Kẻ Mắt Nước Chống Trôi Hiệu Quả Cho Đôi Mắt Sắc Nét Merzy The Heritage Pen Eyeliner - Màu HP2 0.5g",
        brand: "Merzy",
        type: "Eyeliner",
        description: "Bút Kẻ Mắt Nước Chống Trôi Hiệu Quả Cho Đôi Mắt Sắc Nét Merzy The Heritage Pen Eyeliner là kẻ mắt nước nằm trong bộ sưu tập được thương hiệu Merzy ấp ủ đã lâu với tên gọi The Heritage Collection dễ dàng hoàn thiện đường kẻ mắt chỉ với một lần kẻ cùng khả năng chống thấm nước mạnh mẽ cho đôi mắt thêm phần sắc nét huyền bí và cuốn hút.",
        img: "./img/SP/0059.jpg",
        price: 99000,
        remain: 0,
        status: 1
    },
    {
        id: "10060",
        name: "Set mỹ phẩm Perfect Diary bộ sưu tập hoa hồng hạc 02 0.8g",
        brand: "Perfect Diary",
        type: "Combo",
        description: "Set mỹ phẩm Perfect Diary bộ sưu tập hoa hồng hạc là sự kết hợp hoàn hảo giữa các sản phẩm trang điểm như Son kem, Son bóng, Phấn mắt. Thiết kế độc đáo với họa tiết hoa hồng hạc tinh tế và sang trọng. Sản phẩm được làm từ chất liệu an toàn và chất lượng cao, giúp giữ màu lâu và không gây kích ứng cho da. Bộ sưu tập hoa hồng hạc là lựa chọn tuyệt vời cho những ai yêu thích phong cách sang trọng và độc đáo.",
        img: "./img/SP/0060.jpeg",
        price: 999000,
        remain: 50,
        status: 1
    }
   ];

onload = () => {
    if (localStorage.getItem('productDatabase') === null)
        localStorage.setItem('productDatabase',JSON.stringify(productData));
    else
        productData = JSON.parse(localStorage.getItem("productDatabase"));
    if (location.pathname.includes("admin")) loadBang()
}

function loadBang(search = "") {
    let dong = ''
    for (let i=0; i<productData.length; i++)
        if (search === "" || productData[i].name.toLowerCase().includes(search.toLowerCase()))
            dong += `            
                <tr>
                    <th>${productData[i].id}</th>
                    <td>${productData[i].name}</td>
                    <td>${productData[i].type}</td>
                    <td>${productData[i].brand}</td>
                    <td>${productData[i].price}</td>
                    <td>${productData[i].remain}</td>
                    <td>
                        <img src="../${productData[i].img}" style="width: 100px">
                    </td>
                    <td>
                        <button class="btn btn-warning" onclick="openForm('Sửa', ${productData[i].id})">Sửa</button><br>
                        <button class="btn btn-danger" onclick="lockProduct(${i})" id="lock">
                            ${(productData[i].status === 0) ? 'Mở khóa' : 'Khóa'}
                        </button>
                    </td>
                </tr>
            `;
    document.getElementById("product-list").innerHTML = dong;
}

function getProduct(id) {
    for (let i=0; i<productData.length; i++)
        if (productData[i].id === `${id}`) return i;
    return -1;
}

function openForm(handle, productID = "") {
    document.getElementById("productModal").innerHTML = "";
    if (productID !== "") var index = getProduct(productID);
    const product = productData[index] || {type: "Combo", brand: "Innisfree"};
    const modal = document.getElementById("productModal");
    const modalDetail = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${`${handle} sản phẩm`.toUpperCase()}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row m-0">
                                <div class="col">
                                    <div>
                                        <label for="product-id" class="col-form-label fw-bold">ID:</label>
                                        <input type="text" class="form-control" id="product-id" value="${product.id || ""}">
                                        <p id="id-error" class="error">&nbsp;</p>
                                    </div>
                                    <div>
                                        <label for="product-name" class="col-form-label fw-bold">Tên sản phẩm:</label>
                                        <input type="text" class="form-control" id="product-name" value="${product.name || ""}">
                                        <p id="name-error" class="error">&nbsp;</p>
                                    </div>
                                    <div>
                                        <label for="product-price" class="col-form-label fw-bold">Giá:</label>
                                        <input type="number" min="1000" step="500" class="form-control" id="product-price" value="${product.price || ""}" onkeyup="checkKey(this, event)">
                                        <p id="price-error" class="error">&nbsp;</p></div>
                                </div>
                                <div class="col">
                                    <div>
                                        <label for="product-type" class="col-form-label fw-bold font-weight-bold">Loại sản phẩm:</label>
                                        <select name="" class="form-select" id="product-type" value="">
                                            <option value="Combo">Combo</option>
                                            <option value="Tẩy trang">Tẩy trang</option>
                                            <option value="Sữa rửa mặt">Sữa rửa mặt</option>
                                            <option value="Toner">Toner</option>
                                            <option value="Son môi">Son môi</option>
                                            <option value="Mặt nạ">Mặt nạ</option>
                                            <option value="Kem chống nắng">Kem chống nắng</option>
                                            <option value="Lotion">Lotion</option>
                                            <option value="Kem dưỡng">Kem dưỡng</option>
                                            <option value="Sữa dưỡng trắng">Sữa dưỡng trắng</option>
                                            <option value="Gel dưỡng ẩm">Gel dưỡng ẩm</option>
                                            <option value="Kem nền">Kem nền</option>
                                            <option value="Phấn phủ">Phấn phủ</option>
                                            <option value="Cushion">Cushion</option>
                                            <option value="Phấn má hồng">Phấn má hồng</option>
                                            <option value="Che khuyết điểm">Che khuyết điểm</option>
                                            <option value="Phấn mắt">Phấn mắt</option>
                                            <option value="Eyeliner">Eyeliner</option>
                                            <option value="Mascara">Mascara</option>
                                            <option value="Kẻ mày, Tạo khối">Kẻ mày, Tạo khối</option>
                                            <option value="Kẻ mày">Kẻ mày</option>
                                        </select>
                                        <p class="error">&nbsp;</p>
                                    </div>
                                    <div>
                                        <label for="product-brand" class="col-form-label fw-bold">Thương hiệu:</label>
                                        <select name="" class="form-select" id="product-brand" value="">
                                            <option value="Innisfree">Innisfree</option>
                                            <option value="Hadalabo">Hadabalo</option>
                                            <option value="Maybelline">Maybelline</option>
                                            <option value="Black Rouge">Black Rouge</option>
                                            <option value="Perfect Diary">Perfect Diary</option>
                                            <option value="Romand">Romand</option>
                                            <option value="Merzy">Merzy</option>
                                            <option value="BBIA">BBIA</option>
                                            <option value="La Roche-Posay">La Roche-Posay</option>
                                        </select>
                                        <p class="error">&nbsp;</p>
                                    </div>
                                    <div>
                                        <label for="product-remain" class="col-form-label fw-bold">Tồn kho:</label>
                                        <input type="number" min="0" step="1" class="form-control" id="product-remain" value="${(product.remain >= 0) ? product.remain : ''}" onkeyup="checkKey(this, event)">
                                        <p id="remain-error" class="error">&nbsp;</p>
                                    </div>
                                </div>
                                <div>
                                    <label for="product-img" class="col-form-label fw-bold">Đường dẫn tới hình ảnh:</label>
                                    <input type="text" class="form-control" id="product-img" value="${product.img || ""}">
                                    <p id="img-error" class="error">&nbsp;</p>
                                </div>
                                <div>
                                    <label for="product-name" class="col-form-label fw-bold">Mô tả: (Nhập '&lt;br&gt;' nếu muốn xuống dòng)</label>
                                    <textarea class="form-control" id="product-description" rows="6">${product.description || ""}</textarea>
                                    <p id="description-error" class="error">&nbsp;</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-success" onclick="handleProduct('${handle}', ${index})">
                            ${handle}
                        </button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById("productModal").innerHTML += modalDetail;
    document.getElementById("product-brand").value = product.brand;
    document.getElementById("product-type").value = product.type;
    new bootstrap.Modal(modal).show();
    if (handle === "Sửa") document.getElementById("product-id").setAttribute("readonly", "true");
}

function handleProduct(handle, index = 0) {
    let error = false;
    if (document.getElementById("product-id").value === "") {
        document.getElementById("id-error").innerHTML = "ID không được trống";
        error = true;
    }
    else if (!document.getElementById("product-id").hasAttribute("readonly") && getProduct(document.getElementById("product-id").value) !== -1) {
        document.getElementById("id-error").innerHTML = "ID đã tồn tại";
        error = true;
    }
    if (document.getElementById("product-name").value === "") {
        document.getElementById("name-error").innerHTML = "Tên không được trống";
        error = true;
    }
    if (document.getElementById("product-price").value === "") {
        document.getElementById("price-error").innerHTML = "Giá không được trống";
        error = true;
    }
    if (document.getElementById("product-img").value === "") {
        document.getElementById("img-error").innerHTML = "Hình ảnh không được trống";
        error = true;
    }
    if (document.getElementById("product-remain").value === "") {
        document.getElementById("remain-error").innerHTML = "Tồn kho không được trống";
        error = true;
    }
    if (document.getElementById("product-description").value === "") {
        document.getElementById("description-error").innerHTML = "Vui lòng nhập mô tả sản phẩm";
        error = true;
    }

    if (error) return;
    $("#productModal").modal('hide');
    if (handle === "Thêm") addProduct()
    else updateProduct(index);
    localStorage.setItem('productDatabase',JSON.stringify(productData));
    $('.alert-success').css("display", "initial");
    document.querySelector(".alert-success").innerHTML = `${handle} sản phẩm thành công`;
    setTimeout(() => $('.alert-success').css("display", "none"), 3000);
    loadBang();
}

function addProduct() {
    productData.push({
        id: document.getElementById("product-id").value,
        name: document.getElementById("product-name").value,
        brand: document.getElementById("product-brand").value,
        type: document.getElementById("product-type").value,
        img: document.getElementById("product-img").value,
        description: document.getElementById("product-description").innerHTML,
        remain: Number(document.getElementById("product-remain").value),
        price: Number(document.getElementById("product-price").value),
        status: 1
    });
}

function updateSoLuong(id, soLuong) {
    productData = JSON.parse(localStorage.getItem('productDatabase'));
    productData[getProduct(id)].remain = Number(productData[getProduct(id)].remain) + Number(soLuong);
    localStorage.setItem('productDatabase',JSON.stringify(productData));
}

function updateProduct(index) {
    productData.splice(index, 1, {
        id: document.getElementById("product-id").value,
        name: document.getElementById("product-name").value,
        brand: document.getElementById("product-brand").value,
        type: document.getElementById("product-type").value,
        img: document.getElementById("product-img").value,
        description: document.getElementById("product-description").innerHTML,
        remain: Number(document.getElementById("product-remain").value),
        price: Number(document.getElementById("product-price").value),
        status: 1
    });
}

function lockProduct(index) {
    productData[index].status = (productData[index].status === 1) ? 0 : 1;
    localStorage.setItem('productDatabase',JSON.stringify(productData));
    loadBang();
}

function searchProduct() {
    loadBang(document.getElementById("search").value);
}

if (location.pathname.includes("products.html"))
    document.getElementById("searchProduct").addEventListener("keyup", event => {
        if (event.key === "Enter") searchProduct();
    })

function getProductList() {
    if (localStorage.getItem('productDatabase') === null)
        localStorage.setItem('productDatabase',JSON.stringify(productData));
    productList = JSON.parse(localStorage.getItem('productDatabase'));
    let returnList = new Array();
    for (let i=0; i<productList.length; i++)
        if (productList[i].status === 1) returnList.push(productList[i]);
    return returnList;
}

function checkKey(input, event) {
    if (event.key === "Backspace" || event.key === "Enter") return;
    if (isNaN(event.key)) input.value = input.min;
}