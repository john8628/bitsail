import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as s,a as e,b as o,d as n,w as i,e as a,r}from"./app.ff86a951.js";const c={},u=e("h1",{id:"bitsail-component-formats-flink",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bitsail-component-formats-flink","aria-hidden":"true"},"#"),o(" bitsail-component-formats-flink")],-1),m=e("hr",null,null,-1),f=a('<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h2><p>When <em><strong>BitSail</strong></em> uses flink as the engine, it uses <code>flink rows</code> as intermediate format. So developers need to convert data from data source into <code>flink rows</code>. This module offers convenient methods to convert some kinds of data into <code>flink rows</code>. The specific supported formats are as follows:</p><p>so it needs to be converted to after reading the data from the data source bitsail rows. This module is used to provide bitsail rowsa . The specific supported formats are as follows:</p><ul><li>The <code>flink rows</code> mentioned above are actually <code>com.bytedance.bitsail.common.column.Column</code> data wrapped by <code>org.apache.flink.types.Row</code>.</li></ul>',4),h=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Function"),e("th",null,"Link")])],-1),p=e("tr",null,[e("td",null,[e("code",null,"bitsail-component-format-flink-api")]),e("td",null,[o("Provide interface for converting data to "),e("code",null,"Row")]),e("td",null,[e("a",{href:"#jump_api"},"link")])],-1),v=e("td",null,[e("code",null,"bitsail-component-format-flink-hive")],-1),b=e("td",null,[o("Providing method for converting hive "),e("code",null,"Writable")],-1),w=e("td",null,[e("code",null,"bitsail-component-format-flink-json")],-1),_=e("td",null,"Providing method for converting json string",-1),g=a(`<hr><h3 id="rowbuilder-interface" tabindex="-1"><a class="header-anchor" href="#rowbuilder-interface" aria-hidden="true">#</a> <span id="jump_api">RowBuilder interface</span></h3><p>As the name implies, <code>RowBuilder</code> is a builder that converts raw data in a certain format into <code>Row</code>. Therefore it requires at least two parameters:</p><ol><li><code>value</code>: Raw data, such as Writables, JSON strings, <i>etc.</i>.</li><li><code>rowTypeInfo</code>: Describing the structure of raw data, so we can know that what the fields name and data type to extract.</li></ol><p>A basic <code>build</code> method is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * @param value Raw data to transform to &#39;bitsail rows&#39;.
 * @param reuse The transformed \`bitsail row\`.
 * @param rowTypeInfo Determine the format (field name, data types) of the transformed row.
 */
void build(Object value, Row reuse, RowTypeInfo rowTypeInfo) throws BitSailException;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In addition to the above parameters, the <code>build</code> process can also be guided by other parameters, such as character encoding, the index range of fields <i>etc.</i>. So <code>RowBuilder</code> provides the following two extension interfaces:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void build(Object value, Row reuse, String mandatoryEncoding, RowTypeInfo rowTypeInfo) throws BitSailException;

/**
 * @param fieldIndexes Indices of fields in row data that should be included while building.
 */
void build(Object value, Row reuse, String mandatoryEncoding, RowTypeInfo rowTypeInfo, int[] fieldIndexes);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function x(k,y){const t=r("RouterLink");return l(),s("div",null,[u,m,e("p",null,[o("Parent document: "),n(t,{to:"/en/documents/components/"},{default:i(()=>[o("bitsail-components")]),_:1})]),f,e("table",null,[h,e("tbody",null,[p,e("tr",null,[v,b,e("td",null,[n(t,{to:"/en/documents/components/format/hive-format.html"},{default:i(()=>[o("link")]),_:1})])]),e("tr",null,[w,_,e("td",null,[n(t,{to:"/en/documents/components/format/json-format.html"},{default:i(()=>[o("link")]),_:1})])])])]),g])}const I=d(c,[["render",x],["__file","introduction.html.vue"]]);export{I as default};