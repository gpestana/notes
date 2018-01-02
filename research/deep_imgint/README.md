## deep imgint

(whitepaper)

Deep imgint research project aims at understanding whether onion websites with
potentially illegal content leak information in images. The research question is
"Is it effective to acquire investigative information from illegal images in
onion hidden services?" 

The data acquired during the researched will be stored in a database for further
investigations.


### technology

The tech stack consists of a crawler for onion services which ingests all
images in the websites and tries to get EXIF metadata and to peform image 
recognition. The results are stores in a database. The crawler fetches new onion
websites and adds them to the crawler queue. Initially, the flagging mechanism
will flag all images with EXIF data and that the image recognition algorithm has
identified humans in the picture. With time, the flagging mechanism can be
improved.
