### Debugging crawler (data to JSON)

When running a [web crawler](https://github.com/gpestana/redonion) to process 
all images in listed websites, get EXIF metadata and parse the results. The results are parsed into JSON using the stdlib's json.Marshal(). 

I'm getting the following error when piping the JSON results to jq (`redonion
-urls="https://3g2upl4pq6kufc4m.onion/,http://xmh57jrzrnw6insl.onion/" | jq`)

```
parse error: Invalid numeric literal at line 1, column 6
make: *** [sample] Error 4
```

So the json.Marshal(ing) is returning an invalid JSON document.

The error-ed output is the following:

```
{http://xmh57jrzrnw6insl.onion/ [{http://xmh57jrzrnw6insl.onion/img/FUS_FP.gif image_46426792-dcbc-11e7-af50-8c8590541cff map[] [] [No EXIF data found.%!(EXTRA string=)]} {http://xmh57jrzrnw6insl.onion/img/wrhsa3z4n24yw7e2.jpg image_46426792-dcbc-11e7-af50-8c8590541cff map[] [] [No EXIF data found.%!(EXTRA string=)]} {http://xmh57jrzrnw6insl.onion/img/royaltxxy2ssp3c2_fp.gif image_46426792-dcbc-11e7-af50-8c8590541cff map[] [] [No EXIF data found.%!(EXTRA string=)]} {http://xmh57jrzrnw6insl.onion/img/oniondrlb455ed4l.png image_46426792-dcbc-11e7-af50-8c8590541cff map[] [] [No EXIF data found.%!(EXTRA string=)]} {http://xmh57jrzrnw6insl.onion/img/CHE_FP.gif image_46426792-dcbc-11e7-af50-8c8590541cff map[] [] [No EXIF data found.%!(EXTRA string=)]} {http://xmh57jrzrnw6insl.onion/img/XIL_FP.gif image_46426792-dcbc-11e7-af50-8c8590541cff map[] [] [No EXIF data found.%!(EXTRA string=)]} {http://xmh57jrzrnw6insl.onion/img/silkroad7rn2puhj_fp.png image_46426792-dcbc-11e7-af50-8c8590541cff map[] [] [No EXIF data found.%!(EXTRA string=)]} {http://xmh57jrzrnw6insl.onion/img/digigangxiehugqk.gif image_46426792-dcbc-11e7-af50-8c8590541cff map[] [] [No EXIF data found.%!(EXTRA string=)]}]}
{https://3g2upl4pq6kufc4m.onion/ []}
[{"Url":"http://xmh57jrzrnw6insl.onion/","Outputs":[{"Url":"http://xmh57jrzrnw6insl.onion/img/FUS_FP.gif","ProcessorName":"image_46426792-dcbc-11e7-af50-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]},{"Url":"http://xmh57jrzrnw6insl.onion/img/wrhsa3z4n24yw7e2.jpg","ProcessorName":"image_46426792-dcbc-11e7-af50-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]},{"Url":"http://xmh57jrzrnw6insl.onion/img/royaltxxy2ssp3c2_fp.gif","ProcessorName":"image_46426792-dcbc-11e7-af50-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]},{"Url":"http://xmh57jrzrnw6insl.onion/img/oniondrlb455ed4l.png","ProcessorName":"image_46426792-dcbc-11e7-af50-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]},{"Url":"http://xmh57jrzrnw6insl.onion/img/CHE_FP.gif","ProcessorName":"image_46426792-dcbc-11e7-af50-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]},{"Url":"http://xmh57jrzrnw6insl.onion/img/XIL_FP.gif","ProcessorName":"image_46426792-dcbc-11e7-af50-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]},{"Url":"http://xmh57jrzrnw6insl.onion/img/silkroad7rn2puhj_fp.png","ProcessorName":"image_46426792-dcbc-11e7-af50-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]},{"Url":"http://xmh57jrzrnw6insl.onion/img/digigangxiehugqk.gif","ProcessorName":"image_46426792-dcbc-11e7-af50-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]}]},{"Url":"https://3g2upl4pq6kufc4m.onion/","Outputs":null}]
```

The output is not JSON compliant. The problem is that I added a `fmt.Println(..)` in the middle of the code for logging purposes instead of using log.Println(..). The fmt.Prinln prints the output to the stdout which will be piped to the jq, so the output can't be direcly piped in that circumstance.

After replacing fmt -> log, the output is:

```
[{"Url":"http://xmh57jrzrnw6insl.onion/","Outputs":[{"Url":"http://xmh57jrzrnw6insl.onion/img/FUS_FP.gif","ProcessorName":"image_db49b26e-dcbc-11e7-86eb-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]},{"Url":"http://xmh57jrzrnw6insl.onion/img/wrhsa3z4n24yw7e2.jpg","ProcessorName":"image_db49b26e-dcbc-11e7-86eb-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]},{"Url":"http://xmh57jrzrnw6insl.onion/img/royaltxxy2ssp3c2_fp.gif","ProcessorName":"image_db49b26e-dcbc-11e7-86eb-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]},{"Url":"http://xmh57jrzrnw6insl.onion/img/oniondrlb455ed4l.png","ProcessorName":"image_db49b26e-dcbc-11e7-86eb-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]},{"Url":"http://xmh57jrzrnw6insl.onion/img/CHE_FP.gif","ProcessorName":"image_db49b26e-dcbc-11e7-86eb-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]},{"Url":"http://xmh57jrzrnw6insl.onion/img/XIL_FP.gif","ProcessorName":"image_db49b26e-dcbc-11e7-86eb-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]},{"Url":"http://xmh57jrzrnw6insl.onion/img/silkroad7rn2puhj_fp.png","ProcessorName":"image_db49b26e-dcbc-11e7-86eb-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]},{"Url":"http://xmh57jrzrnw6insl.onion/img/digigangxiehugqk.gif","ProcessorName":"image_db49b26e-dcbc-11e7-86eb-8c8590541cff","Exif":null,"Recon":[],"Errors":["No EXIF data found.%!(EXTRA string=)"]}]},{"Url":"https://3g2upl4pq6kufc4m.onion/","Outputs":null}]
``` 

which is a valid JSON blob.


**takeaway**

Use `fmt.Println()` to write output to the stdout and log. * to write to stlog. If go output needs to be JSON compliant, print the output only with `fmt.Println` or `os.Stdout.Write()` 
