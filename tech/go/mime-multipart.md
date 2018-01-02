## MIME multipart usign go:

### A valid POST request:

```
&{POST http://localhost:8080/recognize HTTP/1.1 1 1 map[Content-Type:[multipart/form-data; boundary=3f6d4dc0493ecb1b91948349b4fe5223abd6892c9b21a439419764c2d418]] {--3f6d4dc0493ecb1b91948349b4fe5223abd6892c9b21a439419764c2d418
Content-Disposition: form-data; name="image"; filename="/Users/gpestana/go/src/github.com/gpestana/redonion/redonion.png"
Content-Type: application/octet-stream

�PNG

IHDR�Ȉ_2sRGB���YiTXtXML:com.adobe.xmp<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="XMP Core 5.4.0">
   <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
      <rdf:Description rdf:about=""
            xmlns:tiff="http://ns.adobe.com/tiff/1.0/">
         <tiff:Orientation>1</tiff:Orientation>
      </rdf:Description>
   </rdf:RDF>
</x:xmpmeta>

	... bytes ...

--3f6d4dc0493ecb1b91948349b4fe5223abd6892c9b21a439419764c2d418--
} 0x11e17c0 44091 [] false localhost:8080 map[] map[] <nil> map[]   <nil> <nil> <nil> <nil>}
```

This is the contents of a `http.request` for a valid mime/multipart form from an
image file.

- POST headers: 
	- `Content-Type multipart/form-data`
	- `boundary=3f6d4dc0493ecb1b91948349b4fe5223abd6892c9b21a439419764c2d418`

- MIME/Multipart headers:
	- `Content-Type: application/octet-stream`
	- `Content-Disposition: form-data; name="image"; filename="/Users/gpestana/go/src/github.com/gpestana/redonion/redonion.png"`


### Notes:
- Both POST request and mime/multipart body have to set its own headers
- The boudary is sent in HTTP headers for 'reader' to know what is the
  mime/multipart boudary.
- `w.FormDataContentType()` returns the multipart's writer (w) HTTP headers.
  Usage should be `req.Header.Set("Content-Type", w.FormDataContentType())`

Q: How to create a valid mime/multipart with data from a bytes writter (instead from a
file)?

