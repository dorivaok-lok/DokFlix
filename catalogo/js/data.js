// Array contendo todas as categorias de filmes/séries com seus respectivos itens
// Cada categoria possui um título e uma lista de itens contendo imagem, badges, progresso e link do YouTube
export const categories = [
    {
        title: "Dorivox", // Título da categoria de filmes épicos
        items: [
            {
                img: "https://i.ytimg.com/an_webp/MchyEC4A-Fk/mqdefault_6s.webp?du=3000&sqp=CJqCms4G&rs=AOn4CLCuNfGlDrwWaf7yWIuFdfb_l7Ik5g", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=MchyEC4A-Fk"
            },
            {
                img: "https://i.ytimg.com/an_webp/iGkHDkw11XU/mqdefault_6s.webp?du=3000&sqp=CPWUms4G&rs=AOn4CLCtQbfsNI_qgEv3HWUP03f67nKuLQ", progress: 0,
                youtube: "https://www.youtube.com/watch?v=iGkHDkw11XU"
            },
            {
                img: "https://i.ytimg.com/an_webp/ql2Pxw5q_9Y/mqdefault_6s.webp?du=3000&sqp=CMiGms4G&rs=AOn4CLCtX5HhGktEbi0VLIg8Dv3J2j8vSQ", progress: 0,
                youtube: "https://www.youtube.com/watch?v=ql2Pxw5q_9Y"
            },
            {
                img: "https://i.ytimg.com/an_webp/KGOwTiE_ImQ/mqdefault_6s.webp?du=3000&sqp=CMz3mc4G&rs=AOn4CLCzEMvn05i3G6-_oxRpmTOIq35tNQ", progress: 0,
                youtube: "https://www.youtube.com/watch?v=KGOwTiE_ImQ"
            },
        ]
    },
    {
        title: "DJ Dvox", // Título da categoria de filmes de ação
        items: [
            { img: "https://i.ytimg.com/an_webp/kQwudrrR-HQ/mqdefault_6s.webp?du=3000&sqp=CMCDms4G&rs=AOn4CLDlEljGWlQ1leM9AeDd4TC2ylpVpw", top10: true, badge: "Nova temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=kQwudrrR-HQ&t=33s" },
            { img: "https://i.ytimg.com/an_webp/MhByZE_gE1w/mqdefault_6s.webp?du=3000&sqp=COyFms4G&rs=AOn4CLC_oaCvMUXOep_hrnUrFm6ZBseePw", top10: true, youtube: "https://www.youtube.com/watch?v=MhByZE_gE1w" },
            { img: "https://i.ytimg.com/an_webp/ywcW3uqPGiE/mqdefault_6s.webp?du=3000&sqp=CN-Nms4G&rs=AOn4CLC2Eits1yuxGLUnn_9Smb75LsUmDw", badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=ywcW3uqPGiE" },
            { img: "https://i.ytimg.com/vi/w763O4wTyxo/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHUBoAC4AOKAgwIABABGHIgTyhCMA8=&rs=AOn4CLBEvKRSEt7c88DeZMe29-thcwMZLg", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=w763O4wTyxo" },
        ]
    },
    {
        title: "DOK Signal",
        items: [
            { img: "https://i.ytimg.com/an_webp/nTTk806bmaY/mqdefault_6s.webp?du=3000&sqp=COL1mc4G&rs=AOn4CLDK-4AGj8WMAPlIEBTeqbGuIXCIEw", top10: true, youtube: "https://www.youtube.com/watch?v=nTTk806bmaY" },
            { img: "https://i.ytimg.com/an_webp/5bf9QP4gYJQ/mqdefault_6s.webp?du=3000&sqp=CNCYms4G&rs=AOn4CLDFu90oS7rsQkAlw-XPHiDsvxLFmw", top10: true, badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=5bf9QP4gYJQ" },
            { img: "https://i.ytimg.com/an_webp/ynudQtZMNko/mqdefault_6s.webp?du=3000&sqp=CJKyms4G&rs=AOn4CLBBQesExNn9bCxbdnaARvQ27rh9bw", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=ynudQtZMNko" },
            { img: "https://i.ytimg.com/an_webp/a8JvfMp4eo4/mqdefault_6s.webp?du=3000&sqp=CJa2ms4G&rs=AOn4CLBWt_bAdU6aNEW9cunAPC1lFjN_jA", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=a8JvfMp4eo4" },
        ]
    },
    {
        title: "Irmã Noite",
        items: [
            { img: "https://i.ytimg.com/an_webp/CKfJD5_I16w/mqdefault_6s.webp?du=3000&sqp=CLy6ms4G&rs=AOn4CLBKYdkzNcIZ5hIUdAcyZcIKrORyTg", top10: true, youtube: "https://www.youtube.com/watch?v=CKfJD5_I16w" },
            { img: "https://i.ytimg.com/an_webp/1tIiEiqEEMc/mqdefault_6s.webp?du=3000&sqp=CM-Oms4G&rs=AOn4CLD-YW36tfbAtGG-rJ_5yLX8nRZ2tQ", top10: true, badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=1tIiEiqEEMc" },
            { img: "https://i.ytimg.com/an_webp/r05LeSxgxvg/mqdefault_6s.webp?du=3000&sqp=CJiqms4G&rs=AOn4CLA-vOwOsaFSUliFI5yEMkIBt4kHLw", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=r05LeSxgxvg" },
            { img: "https://i.ytimg.com/an_webp/FNa0j46ninQ/mqdefault_6s.webp?du=3000&sqp=CLSxms4G&rs=AOn4CLDGpVbwPupANPrvoe6pFW4QDDIWZA", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=FNa0j46ninQ" },
        ]
    },
    {
        title: "Trama Filmes",
        items: [
            { img: "https://i.ytimg.com/an_webp/gaGk1Km-3Bc/mqdefault_6s.webp?du=3000&sqp=CJCrms4G&rs=AOn4CLB9Nunmd-Qj4nP-9_P0UYoLdWET8A", top10: true, youtube: "https://www.youtube.com/watch?v=gaGk1Km-3Bc" },
            { img: "https://i.ytimg.com/an_webp/PW5Nq98aqT8/mqdefault_6s.webp?du=3000&sqp=CLW0ms4G&rs=AOn4CLCiy4EXD5tE3VpVoaF20wpGQawBeA", top10: true, badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=PW5Nq98aqT8" },
            { img: "https://i.ytimg.com/an_webp/JwL0vMOgat4/mqdefault_6s.webp?du=3000&sqp=CLidms4G&rs=AOn4CLD6uwxDOluWkkgSsgn24qr6nkxipQ", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=JwL0vMOgat4" },
            { img: "https://i.ytimg.com/an_webp/E25f35mOwrU/mqdefault_6s.webp?du=3000&sqp=COC1ms4G&rs=AOn4CLDJReuZjhZbr6wNLurrJD72cI7LMA", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=E25f35mOwrU" },
        ]
    }

];
