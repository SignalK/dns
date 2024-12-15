var REG_NAMECOM = NewRegistrar("name.com");
var DSP_NAMECOM = NewDnsProvider("name.com");

D("signalk.org", REG_NAMECOM, DnsProvider(DSP_NAMECOM),

    A("@","185.199.108.153"),
    A("@","185.199.109.153"),
    A("@","185.199.110.153"),
    A("@","185.199.111.153"),
    A("autodiscover","71.121.161.147"),
    A("cloud","52.2.109.164"),
    A("mail","71.121.161.147"),
    A("mx1","71.121.161.148"),
    A("shell","71.121.161.147"),
    A("www","185.199.108.153"),
    A("www","185.199.109.153"),
    A("www","185.199.110.153"),
    A("www","185.199.111.153"),


    ALIAS("www","signalk.org."),
    CNAME("demo","demo-signalk-org.fly.dev."),
    MX("mail",10, "mailserver"),
    TXT("mail._domainkey","v=DKIM1; k=rsa; t=y; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDKS3XYzFejuKKG8RtPC+SUIq2/NKN/Zbc+anRX6KBd9IwiL/HfFco/5ifYwEiTPOPrrOtcugdLplVatO/MIvYlF2DLJ8NGyTl/1iBdRp3Ft9XLbIdfslV0Jar3Tu0ZR1aGxfBwPuvna4fx5XcnxOc0wZ9+SNThfgbQr9ELIZBP3wIDAQAB"),
    TXT("@","v=spf1 mx a ip4:71.121.161.147 a:mail.signalk.org -all"),
    TXT("@","google-site-verification=wqLhnX7f0oUcRfr6ciwb3X1XFDHLZRY3fUQzfeGr-Bg"),
END);


