var REG_NAMECOM = NewRegistrar("name.com");
var DSP_NAMECOM = NewDnsProvider("name.com");

D("signalk.org", REG_NAMECOM, DnsProvider(DSP_NAMECOM),
    DefaultTTL(300),

    A("@","185.199.108.153"),
    A("@","185.199.109.153"),
    A("@","185.199.110.153"),
    A("@","185.199.111.153"),
    A("cloud","52.2.109.164"),
    ALIAS("www","signalk.org."),
    CNAME("demo","demo-signalk-org.fly.dev."),
    CNAME("latest","latest-signalk-org.fly.dev."),

    // Mail hosted on mx1.keversoft.nl (mailcow)
    MX("@",10,"mx1.keversoft.nl."),
    CNAME("autodiscover","mx1.keversoft.nl."),
    CNAME("autoconfig","mx1.keversoft.nl."),
    SRV("_autodiscover._tcp",0,1,443,"mx1.keversoft.nl."),
    TXT("@","v=spf1 mx -all"),
    TXT("_dmarc","v=DMARC1; p=none"),
    TXT("dkim._domainkey","v=DKIM1;k=rsa;t=s;s=email;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAor+Nq5xuRTPuSZsdLuah382V3tDFMeHNwbmbX5vNOnuemm2ShvrxGrpSiUloLP6andgA/jbdA/xE3Omk3LHGG8NwaA8UNXgQB1hxDD4qD0mUBfYYZ+UGa4W8Ujv2i16RLXUJdihZDzUiJd5VMn1k+SicTtMSSiYaepryo5GzvZ/+1uTm9IbxzMMUpAKRccuoab5VE99z7IzVgfq/62aXMx6iemTRvRirKh4ZEVeBq9IFsFjoDDhskYxFcm+sWgnOXaFD5Hx0coeTxXKXxU0Dv2YFgM5hwWUl6kthGazvFQkshCRV6MzVuNoyWerM6nRNX+OdhdNnUYpAkGR8YGRFtwIDAQAB"),

    TXT("@","google-site-verification=wqLhnX7f0oUcRfr6ciwb3X1XFDHLZRY3fUQzfeGr-Bg"),

    //this does not work even if the value is correct, provisions
    //with quotes around the value. verified it manually
    TXT("_atproto", "did=did:plc:b6o3a5sifu6lp7if47yabyvp"),
END);
