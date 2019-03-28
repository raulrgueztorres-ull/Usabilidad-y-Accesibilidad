function tag_count() {
 
    var ul_ = document.getElementsByTagName("ul").length;
    var p_ = document.getElementsByTagName("p").length;
    var link_ = document.getElementsByTagName("link").length;


    document.write("Este documento tiene ");
    document.write(ul_);
    document.write(" etiquetas ul, ");
    document.write(p_);
    document.write(" etiquetas de párrafo y ");
    document.write(link_);
    document.write(" etiquetas de enlace.");
    
}
