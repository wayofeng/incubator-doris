/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = [
  {
    title: "Getting Started",
    directoryPath: "get-starting/",
    initialOpenGroupIndex: -1,
    children: [
      "get-starting"
    ],
  },
  {
    title: "Doris Architecture",
    directoryPath: "summary/",
    initialOpenGroupIndex: -1,
    children: [
      "basic-summary",
      "system-architecture"
    ],
  },
  {
    title: "Install And Deploy",
    directoryPath: "install/",
    initialOpenGroupIndex: -1,
    children: [
      "install-deploy",
      {
        title: "Compile",
        directoryPath: "source-install/",
        initialOpenGroupIndex: -1,
        children: [
          "compilation",
          "compilation-with-ldb-toolchain",
          "compilation-arm"
        ],
        sidebarDepth: 2,
      },
    ]
  },
  {
    title: "Table Design",
    directoryPath: "data-table/",
    initialOpenGroupIndex: -1,
    children: [
      "data-model",
      "data-partition",
      "basic-usage",
      "advance-usage",
      "hit-the-rollup",
      "best-practice",
      {
        title: "Index",
        directoryPath: "index/",
        initialOpenGroupIndex: -1,
        children: [
          "bloomfilter",
          "prefix-index",
          "bitmap-index"
        ],
      },
    ],
  },
  {
    title: "Data Operation",
    directoryPath: "data-operate/",
    initialOpenGroupIndex: -1,
    children: [
      {
        title: "Import",
        directoryPath: "import/",
        initialOpenGroupIndex: -1,
        children: [
          "load-manual",
          {
            title: "Import Scenes",
            directoryPath: "import-scenes/",
            initialOpenGroupIndex: -1,
            children: [
              "local-file-load",
              "external-storage-load",
              "kafka-load",
              "external-table-load",
              "jdbc-load",
              "load-atomicity",
              "load-data-convert",
              "load-strict-mode",
            ],
          },
          {
            title: "Import Way",
            directoryPath: "import-way/",
            initialOpenGroupIndex: -1,
            children: [
              "binlog-load-manual",
              "broker-load-manual",
              "routine-load-manual",
              "spark-load-manual",
              "stream-load-manual",
              "s3-load-manual",
              "insert-into-manual",
              "load-json-format", 
            ],
          },                
        ],
      },
      {
        title: "Export",
        directoryPath: "export/",
        initialOpenGroupIndex: -1,
        children: [
          "export-manual",
          "outfile",
          "export_with_mysql_dump",
        ],
      },
      {
        title: "Update and Delete",
        directoryPath: "update-delete/",
        initialOpenGroupIndex: -1,
        children: [
          "update",
          "sequence-column-manual",
          "delete-manual",
          "batch-delete-manual"
        ],
      },
    ],
  },
  {
    title: "Advanced Usage",
    directoryPath: "advanced/",
    initialOpenGroupIndex: -1,
    children: [
      "materialized-view",
      {
        title: "Alter Table",
        directoryPath: "alter-table/",
        initialOpenGroupIndex: -1,
        children: [
          "schema-change",
          "replace-table"
        ],
      },
      {
        title: "Doris Partition",
        directoryPath: "partition/",
        initialOpenGroupIndex: -1,
        children: [
          "dynamic-partition",
          "table-temp-partition"
        ],
      },
      {
        title: "Join Optimization",
        directoryPath: "join-optimization/",
        initialOpenGroupIndex: -1,
        children: [
          "bucket-shuffle-join",
          "colocation-join",
          "runtime-filter",
          "doris-join-optimization"
        ],
      },
      {
        title: "Date Cache",
        directoryPath: "cache/",
        initialOpenGroupIndex: -1,
        children: [
          "partition-cache"
        ],
      },
      "vectorized-execution-engine",
      "broker",
      "resource",
      "orthogonal-bitmap-manual",
      "using-hll",
      "variables",
      "time-zone",
      "small-file-mgr",
      {
        title: "Best Practice",
        directoryPath: "best-practice/",
        initialOpenGroupIndex: -1,
        children: [
          "query-analysis",
          "import-analysis",
          "debug-log"
        ]
      }
    ],
  },
  {
    title: "Ecosystem",
    directoryPath: "ecosystem/",
    initialOpenGroupIndex: -1,
    children: [
      {
        title: "Expansion table",
        directoryPath: "external-table/",
        initialOpenGroupIndex: -1,
        children: [
          "doris-on-es",
          "odbc-of-doris",
          "hive-of-doris",
          "iceberg-of-doris",
          "hudi-external-table"
        ],
      },
      "audit-plugin",
      "flink-doris-connector",
      "spark-doris-connector",
      "datax",
      "logstash",
      {
        title: "Doris Manager",
        directoryPath: "doris-manager/",
        initialOpenGroupIndex: -1,
        children: [
          "compiling-deploying",
          "initializing",
          "cluster-managenent",
          "space-list",
          "space-management",
          "system-settings"
        ],
      },
      {
        title: "SeaTunnel",
        directoryPath: "seatunnel/",
        initialOpenGroupIndex: -1,
        children: [
          "flink-sink",
          "spark-sink"
        ],
      },
      {
        title: "UDF",
        directoryPath: "udf/",
        initialOpenGroupIndex: -1,
        children: [
          "native-user-defined-function",
          "remote-user-defined-function",
          "contribute-udf",
          "java-user-defined-function"
        ],
      },
    ],
  },
  {
    title: "SQL Manual",
    directoryPath: "sql-manual/",
    initialOpenGroupIndex: -1,
    children: [
      {
        title: "SQL Functions",
        directoryPath: "sql-functions/",
        initialOpenGroupIndex: -1,
        children: [
          {
            title: "Date Functions",
            directoryPath: "date-time-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "convert_tz",
              "curdate",
              "current_timestamp",
              "curtime",
              "date_add",
              "date_format",
              "date_sub",
              "datediff",
              "day",
              "dayname",
              "dayofmonth",
              "dayofweek",
              "dayofyear",
              "from_days",
              "from_unixtime",
              "hour",
              "makedate",
              "minute",
              "month",
              "monthname",
              "now",
              "second",
              "str_to_date",
              "time_round",
              "timediff",
              "timestampadd",
              "timestampdiff",
              "to_days",
              "unix_timestamp",
              "utc_timestamp",
              "week",
              "weekday",
              "weekofyear",
              "year",
              "yearweek",
            ],
          },
          {
            title: "GIS Functions",
            directoryPath: "spatial-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "st_astext",
              "st_circle",
              "st_contains",
              "st_distance_sphere",
              "st_geometryfromtext",
              "st_linefromtext",
              "st_point",
              "st_polygon",
              "st_x",
              "st_y",
            ],
          },
          {
            title: "String Functions",
            directoryPath: "string-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "append_trailing_char_if_absent",
              "ascii",
              "bit_length",
              "char_length",
              "concat",
              "concat_ws",
              "ends_with",
              "find_in_set",
              "hex",
              "instr",
              "lcase",
              "left",
              "length",
              "locate",
              "lower",
              "lpad",
              "ltrim",
              "money_format",
              "null_or_empty",
              "repeat",
              "replace",
              "reverse",
              "right",
              "rpad",
              "split_part",
              "starts_with",
              "strleft",
              "strright",
              "substring",
              "unhex",
              {
                title: "Fuzzy Match",
                directoryPath: "like/",
                initialOpenGroupIndex: -1,
                children: [
                  "like",
                  "not_like",
                ],
              },
              {
                title: "Regular Match",
                directoryPath: "regexp/",
                initialOpenGroupIndex: -1,
                children: [
                  "regexp",
                  "regexp_extract",
                  "regexp_replace",
                  "not_regexp",
                ],
              },
            ],
          },
          {
            title: "Aggregate Functions",
            directoryPath: "aggregate-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "approx_count_distinct",
              "avg",
              "bitmap_union",
              "count",
              "group_concat",
              "hll_union_agg",
              "max",
              "max_by",
              "min",
              "min_by",
              "percentile",
              "percentile_approx",
              "stddev",
              "stddev_samp",
              "sum",
              "topn",
              "var_samp",
              "variance",
            ],
          },
          {
            title: "Bitmap Functions",
            directoryPath: "bitmap-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "bitmap_and",
              "bitmap_contains",
              "bitmap_empty",
              "bitmap_from_string",
              "bitmap_has_any",
              "bitmap_has_all",
              "bitmap_hash",
              "bitmap_intersect",
              "bitmap_or",
              "bitmap_and_count",
              "bitmap_or_count",
              "bitmap_xor",
              "bitmap_xor_count",
              "bitmap_not",
              "bitmap_and_not",
              "bitmap_and_not_count",
              "bitmap_subset_in_range",
              "bitmap_subset_limit",
              "sub_bitmap",
              "bitmap_to_string",
              "bitmap_union",
              "bitmap_xor",
              "to_bitmap",
              "bitmap_max",
              "orthogonal_bitmap_intersect",
              "orthogonal_bitmap_intersect_count",
              "orthogonal_bitmap_union_count",
            ],
          },
          {
            title: "Bitwise Functions",
            directoryPath: "bitwise-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "bitand",
              "bitor",
              "bitxor",
              "bitnot"
            ],
          },
          {
            title: "Condition Functions",
            directoryPath: "conditional-functions/",
            children: [
              "case",
              "coalesce",
              "if",
              "ifnull",
              "nvl",
              "nullif"
            ],
          },
          {
            title: "JSON Functions",
            directoryPath: "json-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "get_json_double",
              "get_json_int",
              "get_json_string",
              "json_array",
              "json_object",
              "json_quote",
            ],
          },
          {
            title: "Hash Functions",
            directoryPath: "hash-functions/",
            initialOpenGroupIndex: -1,
            children: ["murmur_hash3_32"],
          },
          {
            title: "Math Functions",
            directoryPath: "math-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "conv",
              "pmod"
            ],
          },
          {
            title: "Encryption Functions",
            directoryPath: "encrypt-digest-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "aes",
              "md5",
              "md5sum",
              "sm4",
              "sm3",
              "sm3sum"
            ],
          },
          {
            title: "Table Functions",
            directoryPath: "table-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "explode-bitmap",
              "explode-split",
              "explode-json-array",
              "outer-combinator"
            ],
          },
          {
            title: "Analytic(Window) Functions",
            directoryPath: "window-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "WINDOW-FUNCTION",
              "WINDOW-FUNCTION-SUM",
              "WINDOW-FUNCTION-AVG",
              "WINDOW-FUNCTION-COUNT",
              "WINDOW-FUNCTION-MIN",
              "WINDOW-FUNCTION-MAX",
              "WINDOW-FUNCTION-LEAD",
              "WINDOW-FUNCTION-LAG",
              "WINDOW-FUNCTION-RANK",
              "WINDOW-FUNCTION-DENSE-RANK",
              "WINDOW-FUNCTION-FIRST-VALUE",
              "WINDOW-FUNCTION-LAST-VALUE",
              "WINDOW-FUNCTION-ROW-NUMBER",
              "WINDOW-FUNCTION-NTILE",
            ],
          },
          {
            title: "Array Functions",
            directoryPath: "array-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "array_contains",
              "array_position",
              "element_at",
            ],
          },
          "cast",
          "digital-masking",
        ],
      },
      {
        title: "SQL Reference",
        directoryPath: "sql-reference/",
        initialOpenGroupIndex: -1,
        children: [
          {
            title: "Account Management",
            directoryPath: "Account-Management-Statements/",
            initialOpenGroupIndex: -1,
            children: [
              "CREATE-USER",
              "CREATE-ROLE",
              "DROP-ROLE",
              "DROP-USER",
              "GRANT",
              "REVOKE",
              "SET-PASSWORD",
              "SET-PROPERTY",
              "LDAP",
            ],
          },
          {
            title: "Cluster management",
            directoryPath: "Cluster-Management-Statements/",
            initialOpenGroupIndex: -1,
            children: [
              "ALTER-SYSTEM-ADD-BACKEND",
              "ALTER-SYSTEM-ADD-FOLLOWER",
              "ALTER-SYSTEM-ADD-OBSERVER",
              "ALTER-SYSTEM-DECOMMISSION-BACKEND",
              "ALTER-SYSTEM-DROP-BACKEND",
              "ALTER-SYSTEM-DROP-FOLLOWER",
              "ALTER-SYSTEM-DROP-OBSERVER",
              "ALTER-SYSTEM-MODIFY-BROKER",
              "CANCEL-ALTER-SYSTEM",
            ],
          },
          {
            title: "DDL",
            directoryPath: "Data-Definition-Statements/",
            initialOpenGroupIndex: -1,
            children: [
              {
                title: "Alter",
                directoryPath: "Alter/",
                initialOpenGroupIndex: -1,
                children: [
                  "ALTER-DATABASE",
                  "ALTER-RESOURCE",
                  "ALTER-SQL-BLOCK-RULE",
                  "ALTER-TABLE-COLUMN",
                  "ALTER-TABLE-PARTITION",
                  "ALTER-TABLE-PROPERTY",
                  "ALTER-TABLE-RENAME",
                  "ALTER-TABLE-REPLACE",
                  "ALTER-TABLE-ROLLUP",
                  "ALTER-VIEW",
                  "CANCEL-ALTER-TABLE",
                ],
              },
              {
                title: "Backup and Restore",
                directoryPath: "Backup-and-Restore/",
                initialOpenGroupIndex: -1,
                children: [
                  "BACKUP",
                  "CANCEL-BACKUP",
                  "CANCEL-RESTORE",
                  "CREATE-REPOSITORY",
                  "DROP-REPOSITORY",
                  "RESTORE",
                ],
              },
              {
                title: "Create",
                directoryPath: "Create/",
                initialOpenGroupIndex: -1,
                children: [
                  "CREATE-DATABASE",
                  "CREATE-ENCRYPT-KEY",
                  "CREATE-FILE",
                  "CREATE-FUNCTION",
                  "CREATE-INDEX",
                  "CREATE-MATERIALIZED-VIEW",
                  "CREATE-POLICY",
                  "CREATE-RESOURCE",
                  "CREATE-SQL-BLOCK-RULE",
                  "CREATE-TABLE-LIKE",
                  "CREATE-TABLE-AS-SELECT",
                  "CREATE-TABLE",
                  "CREATE-VIEW",
                  "CREATE-EXTERNAL-TABLE",
                ],
              },
              {
                title: "Drop",
                directoryPath: "Drop/",
                initialOpenGroupIndex: -1,
                children: [
                  "DROP-DATABASE",
                  "DROP-ENCRYPT-KEY",
                  "DROP-FILE",
                  "DROP-FUNCTION",
                  "DROP-INDEX",
                  "DROP-MATERIALIZED-VIEW",
                  "DROP-RESOURCE",
                  "DROP-SQL-BLOCK-RULE",
                  "DROP-TABLE",
                  "TRUNCATE-TABLE",
                ],
              },              
            ],
          },
          {
            title: "DML",
            directoryPath: "Data-Manipulation-Statements/",
            initialOpenGroupIndex: -1,
            children: [
              {
                title: "Load",
                directoryPath: "Load/",
                initialOpenGroupIndex: -1,
                children: [
                  "ALTER-ROUTINE-LOAD",
                  "BROKER-LOAD",
                  "CANCEL-LOAD",
                  "CREATE-ROUTINE-LOAD",
                  "PAUSE-ROUTINE-LOAD",
                  "RESUME-ROUTINE-LOAD",
                  "STOP-ROUTINE-LOAD",
                  "STREAM-LOAD",
                  "PAUSE-SYNC-JOB",
                  "RESUME-SYNC-JOB",
                  "STOP-SYNC-JOB",
                  "CREATE-SYNC-JOB",
                ],
              },
              {
                title: "Manipulation",
                directoryPath: "Manipulation/",
                initialOpenGroupIndex: -1,
                children: [
                  "DELETE",
                  "INSERT",
                  "UPDATE",
                  "SELECT",
                  "EXPORT"
                ],
              },
              "OUTFILE"             
            ],
          },
          {
            title: "Database Administration",
            directoryPath: "Database-Administration-Statements/",
            initialOpenGroupIndex: -1,
            children: [
              "ADMIN-CANCEL-REPAIR",
              "ADMIN-CHECK-TABLET",
              "ADMIN-REPAIR-TABLE",
              "ADMIN-SET-CONFIG",
              "ADMIN-SET-REPLICA-STATUS",
              "ADMIN-SHOW-CONFIG",
              "ADMIN-SHOW-REPLICA-DISTRIBUTION",
              "ADMIN-SHOW-REPLICA-STATUS",
              "ENABLE-FEATURE",
              "INSTALL-PLUGIN",
              "KILL",
              "RECOVER",
              "SET-VARIABLE",
              "UNINSTALL-PLUGIN",
            ],
          },
          {
            title: "Show",
            directoryPath: "Show-Statements/",
            initialOpenGroupIndex: -1,
            children: [
              "SHOW-ALTER",
              "SHOW-BACKENDS",
              "SHOW-BACKUP",
              "SHOW-BROKER",
              "SHOW-CHARSET",
              "SHOW-COLLATION",
              "SHOW-COLUMNS",
              "SHOW-CREATE-DATABASE",
              "SHOW-CREATE-FUNCTION",
              "SHOW-CREATE-ROUTINE-LOAD",
              "SHOW-CREATE-TABLE",
              "SHOW-CREATE-MATERIALIZED-VIEW",
              "SHOW-DATA",
              "SHOW-DATABASE-ID",
              "SHOW-DATABASES",
              "SHOW-DELETE",
              "SHOW-DYNAMIC-PARTITION",
              "SHOW-ENCRYPT-KEY",
              "SHOW-ENGINES",
              "SHOW-EVENTS",
              "SHOW-EXPORT",
              "SHOW-FRONTENDS",
              "SHOW-FUNCTIONS",
              "SHOW-GRANTS",
              "SHOW-INDEX",
              "SHOW-LOAD-PROFILE",
              "SHOW-LOAD-WARNINGS",
              "SHOW-LOAD",
              "SHOW-MIGRATIONS",
              "SHOW-OPEN-TABLES",
              "SHOW-PARTITION-ID",
              "SHOW-PARTITIONS",
              "SHOW-PLUGINS",
              "SHOW-PROC",
              "SHOW-PROCEDURE",
              "SHOW-PROCESSLIST",
              "SHOW-PROPERTY",
              "SHOW-QUERY-PROFILE",
              "SHOW-REPOSITORIES",
              "SHOW-RESOURCES",
              "SHOW-RESTORE",
              "SHOW-ROLES",
              "SHOW-ROLLUP",
              "SHOW-ROUTINE-LOAD-TASK",
              "SHOW-ROUTINE-LOAD",
              "SHOW-SMALL-FILES",
              "SHOW-SNAPSHOT",
              "SHOW-SQL-BLOCK-RULE",
              "SHOW-STATUS",
              "SHOW-STREAM-LOAD",
              "SHOW-SYNC-JOB",
              "SHOW-TABLE-ID",
              "SHOW-TABLES",
              "SHOW-TABLE-STATUS",
              "SHOW-TABLET",
              "SHOW-TRANSACTION",
              "SHOW-TRIGGERS",
              "SHOW-TRASH",
              "SHOW-USER",
              "SHOW-VARIABLES",
              "SHOW-VIEW",
              "SHOW-WARNING",
              "SHOW-WHITE-LIST",
            ],
          },
          {
            title: "Data Types",
            directoryPath: "Data-Types/",
            initialOpenGroupIndex: -1,
            children: [
              "BIGINT",
              "BITMAP",
              "BOOLEAN",
              "CHAR",
              "DATE",
              "DATETIME",
              "DECIMAL",
              "DOUBLE",
              "FLOAT",
              "HLL",
              "INT",
              "LARGEINT",
              "SMALLINT",
              "STRING",
              "TINYINT",
              "VARCHAR",
              "ARRAY",
            ],
          },
          {
            title: "Utility",
            directoryPath: "Utility-Statements/",
            initialOpenGroupIndex: -1,
            children: [
              "DESCRIBE",
              "HELP",
              "USE",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Admin Manual",
    directoryPath: "admin-manual/",
    initialOpenGroupIndex: -1,
    children: [
      {
        title: "cluster management",
        directoryPath: "cluster-management/",
        initialOpenGroupIndex: -1,
        children: [
          "upgrade",
          "elastic-expansion",
          "load-balancing"
        ],
      },
      {
        title: "Data Admin",
        directoryPath: "data-admin/",
        initialOpenGroupIndex: -1,
        children: [
          "backup",
          "restore",
          "delete-recover"
        ],
      },
      "sql-interception",
      "query-profile",
      "optimization",
      {
        title: "Maintenance and Monitor",
        directoryPath: "maint-monitor/",
        initialOpenGroupIndex: -1,
        children: [
          {
            title: "Monitor Metrics",
            directoryPath: "monitor-metrics/",
            initialOpenGroupIndex: -1,
            children: [
              "fe-metrics",
              "be-metrics"
            ],
          },
          "disk-capacity",
          "metadata-operation",
          "tablet-meta-tool",
          "tablet-repair-and-balance",
          "tablet-restore-tool",
          "monitor-alert",
          "doris-error-code",
          "be-olap-error-code"
        ],
      },
      {
        title: "Config",
        directoryPath: "config/",
        initialOpenGroupIndex: -1,
        children: [
          "fe-config",
          "be-config",
          "user-property"
        ],
      },
      {
        title: "User Privilege and Ldap",
        directoryPath: "privilege-ldap/",
        initialOpenGroupIndex: -1,
        children: [
          "user-privilege",
          "ldap"
        ],
      },
      "multi-tenant",
      {
        title: "HTTP API",
        directoryPath: "http-actions/",
        initialOpenGroupIndex: -1,
        children: [
          {
            title: "FE",
            directoryPath: "fe/",
            initialOpenGroupIndex: -1,
            children: [
              {
                title: "MANAGER",
                directoryPath: "manager/",
                initialOpenGroupIndex: -1,
                children: [
                  "cluster-action",
                  "node-action",
                  "query-profile-action",
                ],
              },
              "backends-action",
              "bootstrap-action",
              "cancel-load-action",
              "check-decommission-action",
              "check-storage-type-action",
              "config-action",
              "connection-action",
              "get-ddl-stmt-action",
              "get-load-info-action",
              "get-load-state",
              "get-log-file-action",
              "get-small-file",
              "ha-action",
              "hardware-info-action",
              "health-action",
              "log-action",
              "logout-action",
              "meta-action",
              "meta-info-action",
              "meta-replay-state-action",
              "profile-action",
              "query-detail-action",
              "query-profile-action",
              "row-count-action",
              "session-action",
              "set-config-action",
              "show-data-action",
              "show-meta-info-action",
              "show-proc-action",
              "show-runtime-info-action",
              "statement-execution-action",
              "system-action",
              "table-query-plan-action",
              "table-row-count-action",
              "table-schema-action",
              "upload-action",
            ],
          },
          "cancel-label",
          "check-reset-rpc-cache",
          "compaction-action",
          "connection-action",
          "fe-get-log-file",
          "get-load-state",
          "get-tablets",
          "profile-action",
          "query-detail-action",
          "restore-tablet",
          "show-data-action",
          "tablet-migration-action",
          "tablets_distribution",
        ],
        sidebarDepth: 1,
      },
    ],
  },
  {
    title: "FAQ",
    directoryPath: "faq/",
    initialOpenGroupIndex: -1,
    children: [
      "install-faq",
      "data-faq",
      "sql-faq"
    ],
  },
  {
    title: "Benchmark",
    directoryPath: "benchmark/",
    initialOpenGroupIndex: -1,
    children: [
      "ssb",
      "tpch"
    ],
  }
];
