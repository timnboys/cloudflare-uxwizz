CloudFlare.define("piwik_open_source_web_analytics",["piwik_open_source_web_analytics/config"],function(e){"use strict";var t=t||[],i=(e.ssl?"https://":"http://")+e.url+("/"===e.url.slice(-1)?"":"/");t.push(["trackPageView"]),t.push(["enableLinkTracking"]),t.push(["setDoNotTrack",!0]),e.prependDomain&&t.push(["setDocumentTitle",document.domain+"/"+document.title]),e.setDomainCookie&&t.push(["setDomainCookie"],"*."+document.domain),window._paq=t,window._paq=t,function(){t.push(["setTrackerUrl",i+"piwik.php"]),t.push(["setSiteId",e.id]);var n=document.createElement("script"),s=document.getElementsByTagName("script")[0];n.type="text/javascript",n.async=!0,n.defer=!0,n.src=i+"piwik.js",s.parentNode.insertBefore(n,s)}()});