# ZAP Scanning Report

ZAP is supported by the [Crash Override Open Source Fellowship](https://crashoverride.com/?zap=rep).


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 7 |
| Informational | 11 |




## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- |
| Absence of Anti-CSRF Tokens | Medium | 8 |
| Content Security Policy (CSP) Header Not Set | Medium | 10 |
| Missing Anti-clickjacking Header | Medium | 8 |
| Application Error Disclosure | Low | 1 |
| Cookie with SameSite Attribute None | Low | 1 |
| Information Disclosure - Debug Error Messages | Low | 1 |
| Permissions Policy Header Not Set | Low | 11 |
| Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s) | Low | 11 |
| Strict-Transport-Security Header Not Set | Low | 11 |
| X-Content-Type-Options Header Missing | Low | 11 |
| Base64 Disclosure | Informational | 8 |
| Information Disclosure - Suspicious Comments | Informational | 6 |
| Non-Storable Content | Informational | 7 |
| Re-examine Cache-control Directives | Informational | 1 |
| Sec-Fetch-Dest Header is Missing | Informational | 3 |
| Sec-Fetch-Mode Header is Missing | Informational | 3 |
| Sec-Fetch-Site Header is Missing | Informational | 3 |
| Sec-Fetch-User Header is Missing | Informational | 3 |
| Session Management Response Identified | Informational | 2 |
| Storable but Non-Cacheable Content | Informational | 4 |
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 3 |




## Alert Detail



### [ Absence of Anti-CSRF Tokens ](https://www.zaproxy.org/docs/alerts/10202/)



##### Medium (Low)

### Description

No Anti-CSRF tokens were found in a HTML submission form.
A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.

CSRF attacks are effective in a number of situations, including:
    * The victim has an active session on the target site.
    * The victim is authenticated via HTTP auth on the target site.
    * The victim is on the same local network as the target site.

CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<form action="/addMinistry" method="POST" class="row g-3 needs-validation" id="newMinistryForm">`
  * Other Info: `No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF, _token, _csrf_token] was found in the following HTML form: [Form 1: "acronym" "acronymDate" "acronymNo" "acronymYes" "effectiveDate" "ministryName" ].`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<form action="/retireMinistry" method="POST" class="row g-3 needs-validation" id="retireForm">`
  * Other Info: `No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF, _token, _csrf_token] was found in the following HTML form: [Form 2: "" ].`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<form action="/splitMinistry" method="POST" class="row g-3 needs-validation" id="splitForm">`
  * Other Info: `No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF, _token, _csrf_token] was found in the following HTML form: [Form 3: "splitEffectiveDateA" "splitEffectiveDateB" "splitMinistryNameA" "splitMinistryNameB" ].`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<form action="/mergeMinistry" method="POST" class="row g-3 needs-validation" id="mergeForm">`
  * Other Info: `No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF, _token, _csrf_token] was found in the following HTML form: [Form 4: "" ].`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<form action="/api/acronym/addNewAcronym" method="POST" class="row g-3 needs-validation" id="newAcronymForm">`
  * Other Info: `No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF, _token, _csrf_token] was found in the following HTML form: [Form 1: "acronymNew" "effectiveDateAcronym" ].`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<form action="/api/acronym/pairMinistryAcronym" method="POST" class="row g-3 needs-validation" id="assignNewAcronymForm">`
  * Other Info: `No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF, _token, _csrf_token] was found in the following HTML form: [Form 2: "" ].`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<form action="" method="" class="row g-3 needs-validation" id="changeAcronymForm">`
  * Other Info: `No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF, _token, _csrf_token] was found in the following HTML form: [Form 3: "" ].`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/history
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<form id="historyForm">`
  * Other Info: `No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic, CSRF, _token, _csrf_token] was found in the following HTML form: [Form 1: "" ].`

Instances: 8

### Solution

Phase: Architecture and Design
Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
For example, use anti-CSRF packages such as the OWASP CSRFGuard.

Phase: Implementation
Ensure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.

Phase: Architecture and Design
Generate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).
Note that this can be bypassed using XSS.

Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.
Note that this can be bypassed using XSS.

Use the ESAPI Session Management control.
This control includes a component for CSRF.

Do not use the GET method for any request that triggers a state change.

Phase: Implementation
Check the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.

### Reference


* [ https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
* [ https://cwe.mitre.org/data/definitions/352.html ](https://cwe.mitre.org/data/definitions/352.html)


#### CWE Id: [ 352 ](https://cwe.mitre.org/data/definitions/352.html)


#### WASC Id: 9

#### Source ID: 3

### [ Content Security Policy (CSP) Header Not Set ](https://www.zaproxy.org/docs/alerts/10038/)



##### Medium (High)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym%3FAcrToReAssign&MinToReAssign=42
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym%3FAcrToReAssign=43&MinToReAssign=42
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/error
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/history
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/history%3FselectMinistryHist=1
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/success
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/api/acronym/addNewAcronym
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/api/acronym/pairMinistryAcronym
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 10

### Solution

Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy ](https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy)
* [ https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
* [ https://www.w3.org/TR/CSP/ ](https://www.w3.org/TR/CSP/)
* [ https://w3c.github.io/webappsec-csp/ ](https://w3c.github.io/webappsec-csp/)
* [ https://web.dev/articles/csp ](https://web.dev/articles/csp)
* [ https://caniuse.com/#feat=contentsecuritypolicy ](https://caniuse.com/#feat=contentsecuritypolicy)
* [ https://content-security-policy.com/ ](https://content-security-policy.com/)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Missing Anti-clickjacking Header ](https://www.zaproxy.org/docs/alerts/10020/)



##### Medium (Medium)

### Description

The response does not include either Content-Security-Policy with 'frame-ancestors' directive or X-Frame-Options to protect against 'ClickJacking' attacks.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym%3FAcrToReAssign&MinToReAssign=42
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym%3FAcrToReAssign=43&MinToReAssign=42
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/error
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/history
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/history%3FselectMinistryHist=1
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/success
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 8

### Solution

Modern Web browsers support the Content-Security-Policy and X-Frame-Options HTTP headers. Ensure one of them is set on all web pages returned by your site/app.
If you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)


#### CWE Id: [ 1021 ](https://cwe.mitre.org/data/definitions/1021.html)


#### WASC Id: 15

#### Source ID: 3

### [ Application Error Disclosure ](https://www.zaproxy.org/docs/alerts/90022/)



##### Low (Medium)

### Description

This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/api/acronym/pairMinistryAcronym
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: `HTTP/1.1 500 Internal Server Error`
  * Other Info: ``

Instances: 1

### Solution

Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.

### Reference



#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ Cookie with SameSite Attribute None ](https://www.zaproxy.org/docs/alerts/10054/)



##### Low (Medium)

### Description

A cookie has been set with its SameSite attribute set to "none", which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: `f4be5fefe14e3ad10c093a7de37e8c69`
  * Attack: ``
  * Evidence: `set-cookie: f4be5fefe14e3ad10c093a7de37e8c69`
  * Other Info: ``

Instances: 1

### Solution

Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.

### Reference


* [ https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site ](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site)


#### CWE Id: [ 1275 ](https://cwe.mitre.org/data/definitions/1275.html)


#### WASC Id: 13

#### Source ID: 3

### [ Information Disclosure - Debug Error Messages ](https://www.zaproxy.org/docs/alerts/10023/)



##### Low (Medium)

### Description

The response appeared to contain common error messages returned by platforms such as ASP.NET, and Web-servers such as IIS and Apache. You can configure the list of common debug messages.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/api/acronym/pairMinistryAcronym
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: `Internal Server Error`
  * Other Info: ``

Instances: 1

### Solution

Disable debugging messages before pushing to production.

### Reference



#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ Permissions Policy Header Not Set ](https://www.zaproxy.org/docs/alerts/10063/)



##### Low (Medium)

### Description

Permissions Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Permissions Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/error
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/history
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/acronymFunctionality.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/common.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/historyFunctionality.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/indexFunctionality.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/success
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/api/acronym/addNewAcronym
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/api/acronym/pairMinistryAcronym
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 11

### Solution

Ensure that your web server, application server, load balancer, etc. is configured to set the Permissions-Policy header.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy)
* [ https://developer.chrome.com/blog/feature-policy/ ](https://developer.chrome.com/blog/feature-policy/)
* [ https://scotthelme.co.uk/a-new-security-header-feature-policy/ ](https://scotthelme.co.uk/a-new-security-header-feature-policy/)
* [ https://w3c.github.io/webappsec-feature-policy/ ](https://w3c.github.io/webappsec-feature-policy/)
* [ https://www.smashingmagazine.com/2018/12/feature-policy/ ](https://www.smashingmagazine.com/2018/12/feature-policy/)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s) ](https://www.zaproxy.org/docs/alerts/10037/)



##### Low (Medium)

### Description

The web/application server is leaking information via one or more "X-Powered-By" HTTP response headers. Access to such information may facilitate attackers identifying other frameworks/components your web application is reliant upon and the vulnerabilities such components may be subject to.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `x-powered-by: Express`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `x-powered-by: Express`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/history
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `x-powered-by: Express`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/images/favicon.png
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `x-powered-by: Express`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `x-powered-by: Express`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/common.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `x-powered-by: Express`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/indexFunctionality.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `x-powered-by: Express`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `x-powered-by: Express`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/style.css
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `x-powered-by: Express`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/addMinistry
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: `x-powered-by: Express`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/retireMinistry
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: `x-powered-by: Express`
  * Other Info: ``

Instances: 11

### Solution

Ensure that your web server, application server, load balancer, etc. is configured to suppress "X-Powered-By" headers.

### Reference


* [ https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/01-Information_Gathering/08-Fingerprint_Web_Application_Framework ](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/01-Information_Gathering/08-Fingerprint_Web_Application_Framework)
* [ https://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html ](https://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html)


#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ Strict-Transport-Security Header Not Set ](https://www.zaproxy.org/docs/alerts/10035/)



##### Low (High)

### Description

HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/error
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/history
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/images/favicon.png
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/common.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/indexFunctionality.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/style.css
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/mergeMinistry
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 11

### Solution

Ensure that your web server, application server, load balancer, etc. is configured to enforce Strict-Transport-Security.

### Reference


* [ https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
* [ https://owasp.org/www-community/Security_Headers ](https://owasp.org/www-community/Security_Headers)
* [ https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security ](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
* [ https://caniuse.com/stricttransportsecurity ](https://caniuse.com/stricttransportsecurity)
* [ https://datatracker.ietf.org/doc/html/rfc6797 ](https://datatracker.ietf.org/doc/html/rfc6797)


#### CWE Id: [ 319 ](https://cwe.mitre.org/data/definitions/319.html)


#### WASC Id: 15

#### Source ID: 3

### [ X-Content-Type-Options Header Missing ](https://www.zaproxy.org/docs/alerts/10021/)



##### Low (Medium)

### Description

The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/error
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/history
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/images/favicon.png
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/acronymFunctionality.js
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/common.js
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/historyFunctionality.js
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/indexFunctionality.js
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/style.css
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/success
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`

Instances: 11

### Solution

Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.
If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.

### Reference


* [ https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622941(v=vs.85) ](https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622941(v=vs.85))
* [ https://owasp.org/www-community/Security_Headers ](https://owasp.org/www-community/Security_Headers)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Base64 Disclosure ](https://www.zaproxy.org/docs/alerts/10094/)



##### Informational (Medium)

### Description

Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH`
  * Other Info: `���Y2��:O2���EON�i�N�r�ؘ:���rOfэxt$�cc�V����`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH`
  * Other Info: `���Y2��:O2���EON�i�N�r�ؘ:���rOfэxt$�cc�V����`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym%3FAcrToReAssign&MinToReAssign=42
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH`
  * Other Info: `���Y2��:O2���EON�i�N�r�ؘ:���rOfэxt$�cc�V����`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym%3FAcrToReAssign=43&MinToReAssign=42
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH`
  * Other Info: `���Y2��:O2���EON�i�N�r�ؘ:���rOfэxt$�cc�V����`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/error
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH`
  * Other Info: `���Y2��:O2���EON�i�N�r�ؘ:���rOfэxt$�cc�V����`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/history
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH`
  * Other Info: `���Y2��:O2���EON�i�N�r�ؘ:���rOfэxt$�cc�V����`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/history%3FselectMinistryHist=1
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH`
  * Other Info: `���Y2��:O2���EON�i�N�r�ؘ:���rOfэxt$�cc�V����`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/success
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH`
  * Other Info: `���Y2��:O2���EON�i�N�r�ؘ:���rOfэxt$�cc�V����`

Instances: 8

### Solution

Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.

### Reference


* [ https://projects.webappsec.org/w/page/13246936/Information%20Leakage ](https://projects.webappsec.org/w/page/13246936/Information%20Leakage)


#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ Information Disclosure - Suspicious Comments ](https://www.zaproxy.org/docs/alerts/10027/)



##### Informational (Low)

### Description

The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/acronymFunctionality.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `from`
  * Other Info: `The following pattern was used: \bFROM\b and was detected 4 times, the first in the element starting with: "      `error fetching acronym data from api url: ${getAcronymDataUrl}`", see evidence field for the suspicious comment/snippet.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/historyFunctionality.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `from`
  * Other Info: `The following pattern was used: \bFROM\b and was detected in the element starting with: "      //stop the page from reloading when form is submitted:", see evidence field for the suspicious comment/snippet.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/historyFunctionality.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `query`
  * Other Info: `The following pattern was used: \bQUERY\b and was detected in the element starting with: "  // find the current ministry to query history from", see evidence field for the suspicious comment/snippet.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/historyFunctionality.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `select`
  * Other Info: `The following pattern was used: \bSELECT\b and was detected in the element starting with: "  //When select dropdown is changed, get ministry selected and display that ministrys's history", see evidence field for the suspicious comment/snippet.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/indexFunctionality.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `from`
  * Other Info: `The following pattern was used: \bFROM\b and was detected 4 times, the first in the element starting with: "//     // get input from form:", see evidence field for the suspicious comment/snippet.`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `select`
  * Other Info: `The following pattern was used: \bSELECT\b and was detected in the element starting with: "<!--
      <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button coll", see evidence field for the suspicious comment/snippet.`

Instances: 6

### Solution

Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.

### Reference



#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ Non-Storable Content ](https://www.zaproxy.org/docs/alerts/10049/)



##### Informational (Medium)

### Description

The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/history
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/addMinistry
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/retireMinistry
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: `no-store`
  * Other Info: ``

Instances: 7

### Solution

The content may be marked as storable by ensuring that the following conditions are satisfied:
The request method must be understood by the cache and defined as being cacheable ("GET", "HEAD", and "POST" are currently defined as cacheable)
The response status code must be understood by the cache (one of the 1XX, 2XX, 3XX, 4XX, or 5XX response classes are generally understood)
The "no-store" cache directive must not appear in the request or response header fields
For caching by "shared" caches such as "proxy" caches, the "private" response directive must not appear in the response
For caching by "shared" caches such as "proxy" caches, the "Authorization" header field must not appear in the request, unless the response explicitly allows it (using one of the "must-revalidate", "public", or "s-maxage" Cache-Control response directives)
In addition to the conditions above, at least one of the following conditions must also be satisfied by the response:
It must contain an "Expires" header field
It must contain a "max-age" response directive
For "shared" caches such as "proxy" caches, it must contain a "s-maxage" response directive
It must contain a "Cache Control Extension" that allows it to be cached
It must have a status code that is defined as cacheable by default (200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501).

### Reference


* [ https://datatracker.ietf.org/doc/html/rfc7234 ](https://datatracker.ietf.org/doc/html/rfc7234)
* [ https://datatracker.ietf.org/doc/html/rfc7231 ](https://datatracker.ietf.org/doc/html/rfc7231)
* [ https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html ](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)


#### CWE Id: [ 524 ](https://cwe.mitre.org/data/definitions/524.html)


#### WASC Id: 13

#### Source ID: 3

### [ Re-examine Cache-control Directives ](https://www.zaproxy.org/docs/alerts/10015/)



##### Informational (Low)

### Description

The cache-control header has not been set properly or is missing, allowing the browser and proxies to cache content. For static assets like css, js, or image files this might be intended, however, the resources should be reviewed to ensure that no sensitive content will be cached.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/success
  * Method: `GET`
  * Parameter: `cache-control`
  * Attack: ``
  * Evidence: `public, max-age=3600, s-maxage=3600`
  * Other Info: ``

Instances: 1

### Solution

For secure content, ensure the cache-control HTTP header is set with "no-cache, no-store, must-revalidate". If an asset should be cached consider setting the directives "public, max-age, immutable".

### Reference


* [ https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching ](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching)
* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
* [ https://grayduck.mn/2021/09/13/cache-control-recommendations/ ](https://grayduck.mn/2021/09/13/cache-control-recommendations/)


#### CWE Id: [ 525 ](https://cwe.mitre.org/data/definitions/525.html)


#### WASC Id: 13

#### Source ID: 3

### [ Sec-Fetch-Dest Header is Missing ](https://www.zaproxy.org/docs/alerts/90005/)



##### Informational (High)

### Description

Specifies how and where the data would be used. For instance, if the value is audio, then the requested resource must be audio data and not any other type of resource.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/images/favicon.png
  * Method: `GET`
  * Parameter: `Sec-Fetch-Dest`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `Sec-Fetch-Dest`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: `Sec-Fetch-Dest`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 3

### Solution

Ensure that Sec-Fetch-Dest header is included in request headers.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest)


#### CWE Id: [ 352 ](https://cwe.mitre.org/data/definitions/352.html)


#### WASC Id: 9

#### Source ID: 3

### [ Sec-Fetch-Mode Header is Missing ](https://www.zaproxy.org/docs/alerts/90005/)



##### Informational (High)

### Description

Allows to differentiate between requests for navigating between HTML pages and requests for loading resources like images, audio etc.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/images/favicon.png
  * Method: `GET`
  * Parameter: `Sec-Fetch-Mode`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `Sec-Fetch-Mode`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: `Sec-Fetch-Mode`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 3

### Solution

Ensure that Sec-Fetch-Mode header is included in request headers.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode)


#### CWE Id: [ 352 ](https://cwe.mitre.org/data/definitions/352.html)


#### WASC Id: 9

#### Source ID: 3

### [ Sec-Fetch-Site Header is Missing ](https://www.zaproxy.org/docs/alerts/90005/)



##### Informational (High)

### Description

Specifies the relationship between request initiator's origin and target's origin.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/images/favicon.png
  * Method: `GET`
  * Parameter: `Sec-Fetch-Site`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `Sec-Fetch-Site`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: `Sec-Fetch-Site`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 3

### Solution

Ensure that Sec-Fetch-Site header is included in request headers.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site)


#### CWE Id: [ 352 ](https://cwe.mitre.org/data/definitions/352.html)


#### WASC Id: 9

#### Source ID: 3

### [ Sec-Fetch-User Header is Missing ](https://www.zaproxy.org/docs/alerts/90005/)



##### Informational (High)

### Description

Specifies if a navigation request was initiated by a user.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/images/favicon.png
  * Method: `GET`
  * Parameter: `Sec-Fetch-User`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/robots.txt
  * Method: `GET`
  * Parameter: `Sec-Fetch-User`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/sitemap.xml
  * Method: `GET`
  * Parameter: `Sec-Fetch-User`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 3

### Solution

Ensure that Sec-Fetch-User header is included in user initiated requests.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User)


#### CWE Id: [ 352 ](https://cwe.mitre.org/data/definitions/352.html)


#### WASC Id: 9

#### Source ID: 3

### [ Session Management Response Identified ](https://www.zaproxy.org/docs/alerts/10112/)



##### Informational (High)

### Description

The given response has been identified as containing a session management token. The 'Other Info' field contains a set of header tokens that can be used in the Header Based Session Management Method. If the request is in a context which has a Session Management Method set to "Auto-Detect" then this rule will change the session management to use the tokens identified.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/
  * Method: `GET`
  * Parameter: `f4be5fefe14e3ad10c093a7de37e8c69`
  * Attack: ``
  * Evidence: `9f677b2f9ea42c42d73c9e50902fee1b`
  * Other Info: `
cookie:f4be5fefe14e3ad10c093a7de37e8c69`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym%3FAcrToReAssign&MinToReAssign=42
  * Method: `GET`
  * Parameter: `f4be5fefe14e3ad10c093a7de37e8c69`
  * Attack: ``
  * Evidence: `9f677b2f9ea42c42d73c9e50902fee1b`
  * Other Info: `
cookie:f4be5fefe14e3ad10c093a7de37e8c69`

Instances: 2

### Solution

This is an informational alert rather than a vulnerability and so there is nothing to fix.

### Reference


* [ https://www.zaproxy.org/docs/desktop/addons/authentication-helper/session-mgmt-id ](https://www.zaproxy.org/docs/desktop/addons/authentication-helper/session-mgmt-id)



#### Source ID: 3

### [ Storable but Non-Cacheable Content ](https://www.zaproxy.org/docs/alerts/10049/)



##### Informational (Medium)

### Description

The response contents are storable by caching components such as proxy servers, but will not be retrieved directly from the cache, without validating the request upstream, in response to similar requests from other users.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/images/favicon.png
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=0`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/common.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=0`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/script/indexFunctionality.js
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=0`
  * Other Info: ``
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/style.css
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=0`
  * Other Info: ``

Instances: 4

### Solution



### Reference


* [ https://datatracker.ietf.org/doc/html/rfc7234 ](https://datatracker.ietf.org/doc/html/rfc7234)
* [ https://datatracker.ietf.org/doc/html/rfc7231 ](https://datatracker.ietf.org/doc/html/rfc7231)
* [ https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html ](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)


#### CWE Id: [ 524 ](https://cwe.mitre.org/data/definitions/524.html)


#### WASC Id: 13

#### Source ID: 3

### [ User Controllable HTML Element Attribute (Potential XSS) ](https://www.zaproxy.org/docs/alerts/10031/)



##### Informational (Low)

### Description

This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.

* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym%3FAcrToReAssign&MinToReAssign=42
  * Method: `GET`
  * Parameter: `MinToReAssign`
  * Attack: ``
  * Evidence: ``
  * Other Info: `User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:

https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym?AcrToReAssign&MinToReAssign=42

appears to include user input in: 

a(n) [option] tag [value] attribute 

The user input found was:
MinToReAssign=42

The user-controlled value was:
42`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym%3FAcrToReAssign=43&MinToReAssign=42
  * Method: `GET`
  * Parameter: `AcrToReAssign`
  * Attack: ``
  * Evidence: ``
  * Other Info: `User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:

https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym?AcrToReAssign=43&MinToReAssign=42

appears to include user input in: 

a(n) [option] tag [value] attribute 

The user input found was:
AcrToReAssign=43

The user-controlled value was:
43`
* URL: https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym%3FAcrToReAssign=43&MinToReAssign=42
  * Method: `GET`
  * Parameter: `MinToReAssign`
  * Attack: ``
  * Evidence: ``
  * Other Info: `User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:

https://ministry-name-app-fe6594-dev.apps.klab.devops.gov.bc.ca/acronym?AcrToReAssign=43&MinToReAssign=42

appears to include user input in: 

a(n) [option] tag [value] attribute 

The user input found was:
MinToReAssign=42

The user-controlled value was:
42`

Instances: 3

### Solution

Validate all input and sanitize output it before writing to any HTML attributes.

### Reference


* [ https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)


#### CWE Id: [ 20 ](https://cwe.mitre.org/data/definitions/20.html)


#### WASC Id: 20

#### Source ID: 3


